"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValidateOptions = getValidateOptions;
exports.getDefaultOptions = getDefaultOptions;
exports.getDefaultVars = getDefaultVars;
exports.extractFromSource = extractFromSource;

function getValidateOptions() {
  return {
    "type": "object",
    "properties": {
      "framework": {
        "type": ["string"]
      },
      "port": {
        "type": ["integer"]
      },
      "emit": {
        "type": ["boolean"]
      },
      "browser": {
        "type": ["boolean"]
      },
      "watch": {
        "type": ["string"]
      },
      "profile": {
        "type": ["string"]
      },
      "environment": {
        "type": ["string"]
      },
      "verbose": {
        "type": ["string"]
      },
      "theme": {
        "type": ["string"]
      },
      "toolkit": {
        "type": ["string"]
      },
      "packages": {
        "type": ["string", "array"]
      },
      "genProdData": {
        "type": ["boolean"]
      },
      "prodFileReplacementConfig": {
        "type": ["array"]
      }
    },
    "additionalProperties": false // "errorMessage": {
    //   "option": "should be {Boolean} (https:/github.com/org/repo#anchor)"
    // }

  };
}

function getDefaultOptions() {
  return {
    port: 1962,
    emit: true,
    browser: true,
    watch: 'yes',
    profile: '',
    genProdData: false,
    environment: 'development',
    verbose: 'no',
    toolkit: 'modern',
    packages: null,
    prodFileReplacementConfig: []
  };
}

function getDefaultVars() {
  return {
    watchStarted: false,
    firstTime: true,
    firstCompile: true,
    browserCount: 0,
    manifest: null,
    extPath: 'ext-angular',
    pluginErrors: [],
    deps: [],
    usedExtComponents: [],
    rebuild: true
  };
}

function toXtype(str) {
  return str.toLowerCase().replace(/_/g, '-');
}

function extractFromSource(module, options, compilation, extComponents) {
  try {
    var js = module._source._value;

    const logv = require('./pluginUtil').logv;

    logv(options, 'HOOK succeedModule, FUNCTION extractFromSource: ' + module.resource);
    var statements = [];

    var generate = require("@babel/generator").default;

    var parse = require("babylon").parse;

    var traverse = require("ast-traverse");

    var ast = parse(js, {
      plugins: ['typescript', 'flow', 'doExpressions', 'objectRestSpread', 'classProperties', 'exportDefaultFrom', 'exportExtensions', 'asyncGenerators', 'functionBind', 'functionSent', 'dynamicImport'],
      sourceType: 'module'
    });
    traverse(ast, {
      pre: function (node) {
        if (node.type === 'CallExpression' && node.callee && node.callee.object && node.callee.object.name === 'Ext') {
          statements.push(generate(node).code);
        }

        if (node.type === 'StringLiteral') {
          let code = node.value;

          for (var i = 0; i < code.length; ++i) {
            if (code.charAt(i) == '<') {
              if (code.substr(i, 4) == '<!--') {
                i += 4;
                i += code.substr(i).indexOf('-->') + 3;
              } else if (code.charAt(i + 1) !== '/') {
                var start = code.substring(i);
                var spaceEnd = start.indexOf(' ');
                var newlineEnd = start.indexOf('\n');
                var tagEnd = start.indexOf('>');
                var end = Math.min(spaceEnd, newlineEnd, tagEnd);

                if (end >= 0) {
                  var xtype = toXtype(start.substring(1, end));

                  if (extComponents.includes(xtype)) {
                    var type = {
                      xtype: xtype
                    };
                    let config = JSON.stringify(type);
                    statements.push(`Ext.create(${config})`);
                  }

                  i += end;
                }
              }
            }
          }
        }
      }
    });
    return statements;
  } catch (e) {
    console.log(e);
    compilation.errors.push('extractFromSource: ' + e);
    return [];
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hbmd1bGFyVXRpbC5qcyJdLCJuYW1lcyI6WyJnZXRWYWxpZGF0ZU9wdGlvbnMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInBvcnQiLCJlbWl0IiwiYnJvd3NlciIsIndhdGNoIiwicHJvZmlsZSIsImdlblByb2REYXRhIiwiZW52aXJvbm1lbnQiLCJ2ZXJib3NlIiwidG9vbGtpdCIsInBhY2thZ2VzIiwicHJvZEZpbGVSZXBsYWNlbWVudENvbmZpZyIsImdldERlZmF1bHRWYXJzIiwid2F0Y2hTdGFydGVkIiwiZmlyc3RUaW1lIiwiZmlyc3RDb21waWxlIiwiYnJvd3NlckNvdW50IiwibWFuaWZlc3QiLCJleHRQYXRoIiwicGx1Z2luRXJyb3JzIiwiZGVwcyIsInVzZWRFeHRDb21wb25lbnRzIiwicmVidWlsZCIsInRvWHR5cGUiLCJzdHIiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJleHRyYWN0RnJvbVNvdXJjZSIsIm1vZHVsZSIsIm9wdGlvbnMiLCJjb21waWxhdGlvbiIsImV4dENvbXBvbmVudHMiLCJqcyIsIl9zb3VyY2UiLCJfdmFsdWUiLCJsb2d2IiwicmVxdWlyZSIsInJlc291cmNlIiwic3RhdGVtZW50cyIsImdlbmVyYXRlIiwiZGVmYXVsdCIsInBhcnNlIiwidHJhdmVyc2UiLCJhc3QiLCJwbHVnaW5zIiwic291cmNlVHlwZSIsInByZSIsIm5vZGUiLCJ0eXBlIiwiY2FsbGVlIiwib2JqZWN0IiwibmFtZSIsInB1c2giLCJjb2RlIiwidmFsdWUiLCJpIiwibGVuZ3RoIiwiY2hhckF0Iiwic3Vic3RyIiwiaW5kZXhPZiIsInN0YXJ0Iiwic3Vic3RyaW5nIiwic3BhY2VFbmQiLCJuZXdsaW5lRW5kIiwidGFnRW5kIiwiZW5kIiwiTWF0aCIsIm1pbiIsInh0eXBlIiwiaW5jbHVkZXMiLCJjb25maWciLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvcnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7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QUFDRjtBQUNGO0FBQ0Y7QUFDRjtBQUNGO0FBL0JXLEtBQU4sQ0FBUjtBQWtDQSxXQUFPM0IsVUFBUDtBQUNELEdBL0RELENBZ0VBLE9BQU1tQyxDQUFOLEVBQVM7QUFDUEMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQTNDLElBQUFBLFdBQVcsQ0FBQzhDLE1BQVosQ0FBbUJ4QixJQUFuQixDQUF3Qix3QkFBd0JxQixDQUFoRDtBQUNBLFdBQU8sRUFBUDtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsaWRhdGVPcHRpb25zKCkge1xuICByZXR1cm4ge1xuICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICBcImZyYW1ld29ya1wiOiAgIHtcInR5cGVcIjogWyBcInN0cmluZ1wiIF19LFxuICAgICAgXCJwb3J0XCI6ICAgICAgICB7XCJ0eXBlXCI6IFsgXCJpbnRlZ2VyXCIgXX0sXG4gICAgICBcImVtaXRcIjogICAgICAgIHtcInR5cGVcIjogWyBcImJvb2xlYW5cIiBdfSxcbiAgICAgIFwiYnJvd3NlclwiOiAgICAge1widHlwZVwiOiBbIFwiYm9vbGVhblwiIF19LFxuICAgICAgXCJ3YXRjaFwiOiAgICAgICB7XCJ0eXBlXCI6IFsgXCJzdHJpbmdcIiBdfSxcbiAgICAgIFwicHJvZmlsZVwiOiAgICAge1widHlwZVwiOiBbIFwic3RyaW5nXCIgXX0sXG4gICAgICBcImVudmlyb25tZW50XCI6IHtcInR5cGVcIjogWyBcInN0cmluZ1wiIF19LFxuICAgICAgXCJ2ZXJib3NlXCI6ICAgICB7XCJ0eXBlXCI6IFsgXCJzdHJpbmdcIiBdfSxcbiAgICAgIFwidGhlbWVcIjogICAgICAge1widHlwZVwiOiBbIFwic3RyaW5nXCIgXX0sXG4gICAgICBcInRvb2xraXRcIjogICAgIHtcInR5cGVcIjogWyBcInN0cmluZ1wiIF19LFxuICAgICAgXCJwYWNrYWdlc1wiOiAgICB7XCJ0eXBlXCI6IFsgXCJzdHJpbmdcIiwgXCJhcnJheVwiIF19LFxuICAgICAgXCJnZW5Qcm9kRGF0YVwiOiB7XCJ0eXBlXCI6IFsgXCJib29sZWFuXCIgXX0sXG4gICAgICBcInByb2RGaWxlUmVwbGFjZW1lbnRDb25maWdcIjoge1widHlwZVwiOiBbIFwiYXJyYXlcIiBdfVxuICAgIH0sXG4gICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZVxuICAgIC8vIFwiZXJyb3JNZXNzYWdlXCI6IHtcbiAgICAvLyAgIFwib3B0aW9uXCI6IFwic2hvdWxkIGJlIHtCb29sZWFufSAoaHR0cHM6L2dpdGh1Yi5jb20vb3JnL3JlcG8jYW5jaG9yKVwiXG4gICAgLy8gfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIHtcbiAgICBwb3J0OiAxOTYyLFxuICAgIGVtaXQ6IHRydWUsXG4gICAgYnJvd3NlcjogdHJ1ZSxcbiAgICB3YXRjaDogJ3llcycsXG4gICAgcHJvZmlsZTogJycsIFxuICAgIGdlblByb2REYXRhOiBmYWxzZSxcbiAgICBlbnZpcm9ubWVudDogJ2RldmVsb3BtZW50JywgXG4gICAgdmVyYm9zZTogJ25vJyxcbiAgICB0b29sa2l0OiAnbW9kZXJuJyxcbiAgICBwYWNrYWdlczogbnVsbCxcbiAgICBwcm9kRmlsZVJlcGxhY2VtZW50Q29uZmlnOiBbXVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0VmFycygpIHtcbiAgcmV0dXJuIHtcbiAgICB3YXRjaFN0YXJ0ZWQgOiBmYWxzZSxcbiAgICBmaXJzdFRpbWUgOiB0cnVlLFxuICAgIGZpcnN0Q29tcGlsZTogdHJ1ZSxcbiAgICBicm93c2VyQ291bnQgOiAwLFxuICAgIG1hbmlmZXN0OiBudWxsLFxuICAgIGV4dFBhdGg6ICdleHQtYW5ndWxhcicsXG4gICAgcGx1Z2luRXJyb3JzOiBbXSxcbiAgICBkZXBzOiBbXSxcbiAgICB1c2VkRXh0Q29tcG9uZW50czogW10sXG4gICAgcmVidWlsZDogdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvWHR5cGUoc3RyKSB7XG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9fL2csICctJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RGcm9tU291cmNlKG1vZHVsZSwgb3B0aW9ucywgY29tcGlsYXRpb24sIGV4dENvbXBvbmVudHMpIHtcbiAgdHJ5IHtcbiAgICB2YXIganMgPSBtb2R1bGUuX3NvdXJjZS5fdmFsdWVcbiAgICBjb25zdCBsb2d2ID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndlxuICAgIGxvZ3Yob3B0aW9ucywnSE9PSyBzdWNjZWVkTW9kdWxlLCBGVU5DVElPTiBleHRyYWN0RnJvbVNvdXJjZTogJyArIG1vZHVsZS5yZXNvdXJjZSlcblxuICAgIHZhciBzdGF0ZW1lbnRzID0gW11cblxuICAgIHZhciBnZW5lcmF0ZSA9IHJlcXVpcmUoXCJAYmFiZWwvZ2VuZXJhdG9yXCIpLmRlZmF1bHRcbiAgICB2YXIgcGFyc2UgPSByZXF1aXJlKFwiYmFieWxvblwiKS5wYXJzZVxuICAgIHZhciB0cmF2ZXJzZSA9IHJlcXVpcmUoXCJhc3QtdHJhdmVyc2VcIilcblxuICAgIHZhciBhc3QgPSBwYXJzZShqcywge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICAndHlwZXNjcmlwdCcsXG4gICAgICAgICdmbG93JyxcbiAgICAgICAgJ2RvRXhwcmVzc2lvbnMnLFxuICAgICAgICAnb2JqZWN0UmVzdFNwcmVhZCcsXG4gICAgICAgICdjbGFzc1Byb3BlcnRpZXMnLFxuICAgICAgICAnZXhwb3J0RGVmYXVsdEZyb20nLFxuICAgICAgICAnZXhwb3J0RXh0ZW5zaW9ucycsXG4gICAgICAgICdhc3luY0dlbmVyYXRvcnMnLFxuICAgICAgICAnZnVuY3Rpb25CaW5kJyxcbiAgICAgICAgJ2Z1bmN0aW9uU2VudCcsXG4gICAgICAgICdkeW5hbWljSW1wb3J0J1xuICAgICAgXSxcbiAgICAgIHNvdXJjZVR5cGU6ICdtb2R1bGUnXG4gICAgfSlcblxuICAgIHRyYXZlcnNlKGFzdCwge1xuICAgICAgcHJlOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZS50eXBlID09PSAnQ2FsbEV4cHJlc3Npb24nICYmIG5vZGUuY2FsbGVlICYmIG5vZGUuY2FsbGVlLm9iamVjdCAmJiBub2RlLmNhbGxlZS5vYmplY3QubmFtZSA9PT0gJ0V4dCcpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRzLnB1c2goZ2VuZXJhdGUobm9kZSkuY29kZSlcbiAgICAgICAgfVxuICAgICAgICBpZihub2RlLnR5cGUgPT09ICdTdHJpbmdMaXRlcmFsJykge1xuICAgICAgICAgIGxldCBjb2RlID0gbm9kZS52YWx1ZVxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29kZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKGNvZGUuY2hhckF0KGkpID09ICc8Jykge1xuICAgICAgICAgICAgICBpZiAoY29kZS5zdWJzdHIoaSwgNCkgPT0gJzwhLS0nKSB7XG4gICAgICAgICAgICAgICAgaSArPSA0XG4gICAgICAgICAgICAgICAgaSArPSBjb2RlLnN1YnN0cihpKS5pbmRleE9mKCctLT4nKSArIDNcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlLmNoYXJBdChpKzEpICE9PSAnLycpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBjb2RlLnN1YnN0cmluZyhpKVxuICAgICAgICAgICAgICAgIHZhciBzcGFjZUVuZCA9IHN0YXJ0LmluZGV4T2YoJyAnKVxuICAgICAgICAgICAgICAgIHZhciBuZXdsaW5lRW5kID0gc3RhcnQuaW5kZXhPZignXFxuJylcbiAgICAgICAgICAgICAgICB2YXIgdGFnRW5kID0gc3RhcnQuaW5kZXhPZignPicpXG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IE1hdGgubWluKHNwYWNlRW5kLCBuZXdsaW5lRW5kLCB0YWdFbmQpXG4gICAgICAgICAgICAgICAgaWYgKGVuZCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgeHR5cGUgPSB0b1h0eXBlKHN0YXJ0LnN1YnN0cmluZygxLCBlbmQpKVxuICAgICAgICAgICAgICAgICAgaWYoZXh0Q29tcG9uZW50cy5pbmNsdWRlcyh4dHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSB7eHR5cGU6IHh0eXBlfVxuICAgICAgICAgICAgICAgICAgICBsZXQgY29uZmlnID0gSlNPTi5zdHJpbmdpZnkodHlwZSlcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50cy5wdXNoKGBFeHQuY3JlYXRlKCR7Y29uZmlnfSlgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaSArPSBlbmRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudHNcbiAgfVxuICBjYXRjaChlKSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnZXh0cmFjdEZyb21Tb3VyY2U6ICcgKyBlKVxuICAgIHJldHVybiBbXVxuICB9XG59XG4iXX0=