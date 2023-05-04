const ImportCSS = async function(id, path) {
  const cssString = await require(`!!raw-loader!${path}`);
  const styleTag = document.createElement("style");
  styleTag.innerHTML = cssString.default;
  styleTag.id = id;
  document.head.appendChild(styleTag);
  return styleTag;
}

const DeleteCSS = function(id) {
  const styleTag = document.getElementById(id);
  document.head.removeChild(styleTag);
  return styleTag;
}

module.exports = {
  ImportCSS,
  DeleteCSS,
};
