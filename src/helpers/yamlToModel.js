import yaml from "js-yaml";

export function yamlToModel(text) {
  
}


function readYaml(text) {
  try {
    const doc = yaml.safeLoad(text);
    console.log(doc);
    return doc;
  } catch (e) {
    console.log(e);
  }
  return null;
}