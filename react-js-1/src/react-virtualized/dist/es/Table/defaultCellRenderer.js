

/**
 * Default cell renderer that displays an attribute as a simple string
 * You should override the column's cellRenderer if your data is some other type of object.
 */
var babelPluginFlowReactPropTypes_proptype_CellRendererParams = require('./types').babelPluginFlowReactPropTypes_proptype_CellRendererParams || require('prop-types').any;

export default function defaultCellRenderer(_ref) {
  var cellData = _ref.cellData;

  if (cellData == null) {
    return '';
  } else {
    return String(cellData);
  }
}