const fs = require("fs");
const parseString = require("xml2js").parseString;
const xml2js = require("xml2js");

module.exports = function (ctx) {
  var pathToManifest = "platforms/android/app/src/main/AndroidManifest.xml";

  if (!fs.existsSync(pathToManifest)) {
    pathToManifest = "platforms/android/AndroidManifest.xml";
  }

  // remove empty deeplinks data tags
  const content = fs.readFileSync(pathToManifest, "utf8");
  const newContent = content.replace(/<data\s+android:host="\s*"[^>]+>/g, "");

  // remove duplication intent filter tags
  parseString(newContent, function (err, result) {
    if (err) {
      console.log("Stionic.com: Can not remove empty deeplinks");
      return;
    } else {
      var intent;
      try {
        intent = result['manifest']['application'][0]['activity'][0]['intent-filter'];
      } catch (ex) {
        console.log("Stionic.com: Intent filter not found");
        return;
      }
      if (Array.isArray(intent)) {
        let _intent = [];
        intent.forEach(function (item) {
          if (JSON.stringify(_intent).indexOf(JSON.stringify(item)) == -1) _intent.push(item);
        });
        // set new intent filter and write new content to Manifest file
        result['manifest']['application'][0]['activity'][0]['intent-filter'] = _intent;
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(result);

        fs.writeFileSync(pathToManifest, xml, "utf8");
        console.log("Stionic.com: Removed empty deeplinks");
      }
    }
  });
};
