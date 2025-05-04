
import graphlib from "graphlib";
var _lodash = require('lodash');
const data={
  "nodes": [
      {
          "id": "3817571",
          "identifiedObjectPSRID": "PD_0305_10040517",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "10040517",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "备用116断路\n器",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30500000_579897",
          "identifiedObjectName": "备用116断路器",
          "labels": [
              "Breaker"
          ],
          "neo4jType": "Breaker",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Breaker",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "Breaker",
          "size": [
              100,
              50
          ],
          "style": {
              "fill": "blue",
              "stroke": "black",
              "lineWidth": 3
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "blue",
                  "fontSize": 22,
                  "stroke": "black",
                  "textAlign": "center",
                  "textBaseline": "top"
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "3817524",
          "identifiedObjectPSRID": "PD_0311_c727e236-c5bc-4969-b9d3-a071c5038979",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "c727e236-c5bc-4969-b9d3-a071c5038979",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "10kV光华路\n1号线1号环网\n柜母线",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "31100000_953700975",
          "identifiedObjectName": "10kV光华路1号线1号环网柜母线",
          "labels": [
              "BusbarSection"
          ],
          "neo4jType": "BusbarSection",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Bus",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "circle",
          "size": 30,
          "style": {
              "fill": "red",
              "stroke": "red",
              "lineWidth": 2
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5601203",
          "identifiedObjectPSRID": "PD_0305_69cbe81e-d18b-4747-8402-28ef905f8f9a",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "69cbe81e-d18b-4747-8402-28ef905f8f9a",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "至中和桥30\n号2号配电室1\n号变",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30500099_1000827372",
          "identifiedObjectName": "至中和桥30号2号配电室1号变",
          "labels": [
              "CompositeSwitch"
          ],
          "neo4jType": "CompositeSwitch",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Breaker",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "Breaker",
          "size": [
              100,
              50
          ],
          "style": {
              "fill": "blue",
              "stroke": "black",
              "lineWidth": 3
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "blue",
                  "fontSize": 22,
                  "stroke": "black",
                  "textAlign": "center",
                  "textBaseline": "top"
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5601716",
          "identifiedObjectPSRID": "PD_0311_bfb81a8e-255b-4077-8ffc-48721421396a",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "bfb81a8e-255b-4077-8ffc-48721421396a",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n2号配电室I段\n高压母线",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "31100000_1000827277",
          "identifiedObjectName": "中和桥30号2号配电室I段高压母线",
          "labels": [
              "BusbarSection"
          ],
          "neo4jType": "BusbarSection",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Bus",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "circle",
          "size": 30,
          "style": {
              "fill": "red",
              "stroke": "red",
              "lineWidth": 2
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5601202",
          "identifiedObjectPSRID": "PD_0305_c7edf290-020c-4928-a115-1f3bda04fcd1",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "c7edf290-020c-4928-a115-1f3bda04fcd1",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "至中和桥30\n号1号配电室10\n1间隔",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30500099_1000827371",
          "identifiedObjectName": "至中和桥30号1号配电室101间隔",
          "labels": [
              "CompositeSwitch"
          ],
          "neo4jType": "CompositeSwitch",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Breaker",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "Breaker",
          "size": [
              100,
              50
          ],
          "style": {
              "fill": "blue",
              "stroke": "black",
              "lineWidth": 3
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "blue",
                  "fontSize": 22,
                  "stroke": "black",
                  "textAlign": "center",
                  "textBaseline": "top"
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5601717",
          "identifiedObjectPSRID": "PD_0311_78c67879-b4c5-47be-a4b8-e82c72a321aa",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "78c67879-b4c5-47be-a4b8-e82c72a321aa",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n1号配电室I段\n高压母线",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "31100000_1000827278",
          "identifiedObjectName": "中和桥30号1号配电室I段高压母线",
          "labels": [
              "BusbarSection"
          ],
          "neo4jType": "BusbarSection",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Bus",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "circle",
          "size": 30,
          "style": {
              "fill": "red",
              "stroke": "red",
              "lineWidth": 2
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5601220",
          "identifiedObjectPSRID": "PD_0305_854c72df-efc9-41af-b692-01dfc03305cb",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "854c72df-efc9-41af-b692-01dfc03305cb",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "至中和桥30\n号2号配电室3\n号变",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30500099_1000827365",
          "identifiedObjectName": "至中和桥30号2号配电室3号变",
          "labels": [
              "CompositeSwitch"
          ],
          "neo4jType": "CompositeSwitch",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Breaker",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "Breaker",
          "size": [
              100,
              50
          ],
          "style": {
              "fill": "blue",
              "stroke": "black",
              "lineWidth": 3
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "blue",
                  "fontSize": 22,
                  "stroke": "black",
                  "textAlign": "center",
                  "textBaseline": "top"
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5601701",
          "identifiedObjectPSRID": "PD_0311_790feb0e-e4fd-4cfd-80a2-cd3bcde92d02",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "790feb0e-e4fd-4cfd-80a2-cd3bcde92d02",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n2号配电室III\n段高压母线",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "31100000_1000827274",
          "identifiedObjectName": "中和桥30号2号配电室III段高压母线",
          "labels": [
              "BusbarSection"
          ],
          "neo4jType": "BusbarSection",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Bus",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "circle",
          "size": 30,
          "style": {
              "fill": "red",
              "stroke": "red",
              "lineWidth": 2
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5601188",
          "identifiedObjectPSRID": "PD_0305_472559fd-c461-4f4a-a6d4-b119607004f4",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "472559fd-c461-4f4a-a6d4-b119607004f4",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "至中和桥30\n号3号箱变",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30500099_1000827377",
          "identifiedObjectName": "至中和桥30号3号箱变",
          "labels": [
              "CompositeSwitch"
          ],
          "neo4jType": "CompositeSwitch",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Breaker",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "Breaker",
          "size": [
              100,
              50
          ],
          "style": {
              "fill": "blue",
              "stroke": "black",
              "lineWidth": 3
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "blue",
                  "fontSize": 22,
                  "stroke": "black",
                  "textAlign": "center",
                  "textBaseline": "top"
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5601657",
          "identifiedObjectPSRID": "PD_0311_0cfee415-639b-408e-892f-eb959578d1cf",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "0cfee415-639b-408e-892f-eb959578d1cf",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n3号箱变高压\n母线",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "31100000_1000827280",
          "identifiedObjectName": "中和桥30号3号箱变高压母线",
          "labels": [
              "BusbarSection"
          ],
          "neo4jType": "BusbarSection",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Bus",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "circle",
          "size": 30,
          "style": {
              "fill": "red",
              "stroke": "red",
              "lineWidth": 2
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "3817542",
          "identifiedObjectPSRID": "PD_0307_c8c4bf8b-943d-44df-b96f-d0b1e3d52910",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "c8c4bf8b-943d-44df-b96f-d0b1e3d52910",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "备用",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30700002_953700970",
          "identifiedObjectName": "备用",
          "labels": [
              "CompositeSwitch"
          ],
          "neo4jType": "CompositeSwitch",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Breaker",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "Breaker",
          "size": [
              100,
              50
          ],
          "style": {
              "fill": "blue",
              "stroke": "black",
              "lineWidth": 3
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "blue",
                  "fontSize": 22,
                  "stroke": "black",
                  "textAlign": "center",
                  "textBaseline": "top"
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5601659",
          "identifiedObjectPSRID": "PD_0311_fcb38d65-601c-4600-8aab-9d71ee1d225f",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "fcb38d65-601c-4600-8aab-9d71ee1d225f",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "光华路1号线\n2号环网柜高\n压母线",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "31100000_1000827281",
          "identifiedObjectName": "光华路1号线2号环网柜高压母线",
          "labels": [
              "BusbarSection"
          ],
          "neo4jType": "BusbarSection",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Bus",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "circle",
          "size": 30,
          "style": {
              "fill": "red",
              "stroke": "red",
              "lineWidth": 2
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5601190",
          "identifiedObjectPSRID": "PD_0305_089b9e3b-2278-4391-a1b1-f1fd2424b1d1",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "089b9e3b-2278-4391-a1b1-f1fd2424b1d1",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "至中和桥30\n号开关站101间\n隔",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30500099_1000827379",
          "identifiedObjectName": "至中和桥30号开关站101间隔",
          "labels": [
              "CompositeSwitch"
          ],
          "neo4jType": "CompositeSwitch",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Breaker",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "Breaker",
          "size": [
              100,
              50
          ],
          "style": {
              "fill": "blue",
              "stroke": "black",
              "lineWidth": 3
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "blue",
                  "fontSize": 22,
                  "stroke": "black",
                  "textAlign": "center",
                  "textBaseline": "top"
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5601699",
          "identifiedObjectPSRID": "PD_0311_30dd7b71-90d5-474f-9abd-75195aba2fbd",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "30dd7b71-90d5-474f-9abd-75195aba2fbd",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n开关站I段高压\n母线",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "31100000_1000827273",
          "identifiedObjectName": "中和桥30号开关站I段高压母线",
          "labels": [
              "BusbarSection"
          ],
          "neo4jType": "BusbarSection",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Bus",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "circle",
          "size": 30,
          "style": {
              "fill": "red",
              "stroke": "red",
              "lineWidth": 2
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5532738",
          "identifiedObjectPSRID": "PD_0305_898a9169-06d5-48df-aa7f-de5e1797670d",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "898a9169-06d5-48df-aa7f-de5e1797670d",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "母联柜",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30500099_1000827367_06",
          "identifiedObjectName": "母联柜",
          "labels": [
              "ContactBreaker"
          ],
          "neo4jType": "ContactBreaker",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "ContactBreaker",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "ContactBreaker",
          "size": [
              100,
              40
          ],
          "style": {
              "fill": "white",
              "stroke": "black",
              "lineWidth": 3
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "blue",
                  "fontSize": 22,
                  "stroke": "black",
                  "textAlign": "center",
                  "textBaseline": "top"
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          }
      },
      {
          "id": "110122",
          "identifiedObjectPSRID": "PD_zf01_11891",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "11891",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "石门坎变",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30000000_3146497",
          "identifiedObjectName": "石门坎变",
          "labels": [
              "NewSubstation"
          ],
          "neo4jType": "NewSubstation",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "NewSubstation",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "rect",
          "size": [
              100,
              100
          ],
          "style": {
              "fill": "#7afbfd",
              "stroke": "black",
              "lineWidth": 5
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 24
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#fff"
          }
      },
      {
          "id": "3257206",
          "identifiedObjectPSRID": null,
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "3221011405445562_08f01585-9398-44c8-90e2-af5ce2a46e87_03",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "南京绿地地\n铁五号线项目\n投资发展有限\n公司（地铁五号线小天堂站盾构机）负载",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "11000000_3221011405445562_08f01585-9398-44c8-90e2-af5ce2a46e87_03",
          "identifiedObjectName": "南京绿地地铁五号线项目投资发展有限公司（地铁五号线小天堂站盾构机）负载",
          "labels": [
              "Load"
          ],
          "neo4jType": "Load",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Load",
          "iconType": "Load",
          "type": "circle",
          "size": 20,
          "style": {
              "fill": "rgba(0,0,0,0.5)",
              "stroke": "rgba(0,0,0,0.5)",
              "lineWidth": 3
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#fff"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "#fff"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "#fff"
              }
          }
      },
      {
          "id": "5534255",
          "identifiedObjectPSRID": "PD_0307_8eec36c6-6eda-4b7f-9818-2e77d224b0e4",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "8eec36c6-6eda-4b7f-9818-2e77d224b0e4",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "母联柜",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30700002_1000827290_06",
          "identifiedObjectName": "母联柜",
          "labels": [
              "ContactBreaker"
          ],
          "neo4jType": "ContactBreaker",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "ContactBreaker",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "ContactBreaker",
          "size": [
              100,
              40
          ],
          "style": {
              "fill": "white",
              "stroke": "black",
              "lineWidth": 3
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "blue",
                  "fontSize": 22,
                  "stroke": "black",
                  "textAlign": "center",
                  "textBaseline": "top"
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          }
      },
      {
          "id": "5601393",
          "identifiedObjectPSRID": "PD_0302_01784632-8741-4f7c-be2b-bc0bf8d643b3",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "01784632-8741-4f7c-be2b-bc0bf8d643b3",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n1号配电室3\n号主变",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30200002_1000826899",
          "identifiedObjectName": "中和桥30号1号配电室3号主变",
          "labels": [
              "PowerTransformer"
          ],
          "neo4jType": "PowerTransformer",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "PowerTransformer",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "PowerTransformer",
          "size": [
              90,
              50
          ],
          "labelCfg": {
              "position": "top",
              "style": {
                  "lineWidth": 0,
                  "fontSize": 22,
                  "stroke": "black",
                  "fill": "orange",
                  "textAlign": "center",
                  "textBaseline": "top"
              }
          }
      },
      {
          "id": "5114243",
          "identifiedObjectPSRID": null,
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "01784632-8741-4f7c-be2b-bc0bf8d643b3_02",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n1号配电室3\n号主变低压侧",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30200002_1000826899_02",
          "identifiedObjectName": "中和桥30号1号配电室3号主变低压侧",
          "labels": [
              "Bus"
          ],
          "neo4jType": "Bus",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Bus",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "circle",
          "size": 30,
          "style": {
              "fill": "red",
              "stroke": "red",
              "lineWidth": 2
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5114244",
          "identifiedObjectPSRID": null,
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "01784632-8741-4f7c-be2b-bc0bf8d643b3_02_03",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n1号配电室3\n号主变低压侧\n负载",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30200002_1000826899_02_03",
          "identifiedObjectName": "中和桥30号1号配电室3号主变低压侧负载",
          "labels": [
              "Load"
          ],
          "neo4jType": "Load",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Load",
          "iconType": "Load",
          "type": "circle",
          "size": 20,
          "style": {
              "fill": "rgba(0,0,0,0.5)",
              "stroke": "rgba(0,0,0,0.5)",
              "lineWidth": 3
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#fff"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "#fff"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "#fff"
              }
          }
      },
      {
          "id": "5601395",
          "identifiedObjectPSRID": "PD_0302_e3dba112-9e17-4163-8373-1d877aef5785",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "e3dba112-9e17-4163-8373-1d877aef5785",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n1号配电室1号\n主变",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30200002_1000826897",
          "identifiedObjectName": "中和桥30号1号配电室1号主变",
          "labels": [
              "PowerTransformer"
          ],
          "neo4jType": "PowerTransformer",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "PowerTransformer",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "PowerTransformer",
          "size": [
              90,
              50
          ],
          "labelCfg": {
              "position": "top",
              "style": {
                  "lineWidth": 0,
                  "fontSize": 22,
                  "stroke": "black",
                  "fill": "orange",
                  "textAlign": "center",
                  "textBaseline": "top"
              }
          }
      },
      {
          "id": "5114249",
          "identifiedObjectPSRID": null,
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "e3dba112-9e17-4163-8373-1d877aef5785_02",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n1号配电室1号\n主变低压侧",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30200002_1000826897_02",
          "identifiedObjectName": "中和桥30号1号配电室1号主变低压侧",
          "labels": [
              "Bus"
          ],
          "neo4jType": "Bus",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Bus",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "circle",
          "size": 30,
          "style": {
              "fill": "red",
              "stroke": "red",
              "lineWidth": 2
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5114250",
          "identifiedObjectPSRID": null,
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "e3dba112-9e17-4163-8373-1d877aef5785_02_03",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n1号配电室1号\n主变低压侧负\n载",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30200002_1000826897_02_03",
          "identifiedObjectName": "中和桥30号1号配电室1号主变低压侧负载",
          "labels": [
              "Load"
          ],
          "neo4jType": "Load",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Load",
          "iconType": "Load",
          "type": "circle",
          "size": 20,
          "style": {
              "fill": "rgba(0,0,0,0.5)",
              "stroke": "rgba(0,0,0,0.5)",
              "lineWidth": 3
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#fff"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "#fff"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "#fff"
              }
          }
      },
      {
          "id": "5601398",
          "identifiedObjectPSRID": "PD_0302_d1ecbccb-9939-44ff-a0a9-30495b753f52",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "d1ecbccb-9939-44ff-a0a9-30495b753f52",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n2号配电室1号\n主变",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30200002_1000826895",
          "identifiedObjectName": "中和桥30号2号配电室1号主变",
          "labels": [
              "PowerTransformer"
          ],
          "neo4jType": "PowerTransformer",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "PowerTransformer",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "PowerTransformer",
          "size": [
              90,
              50
          ],
          "labelCfg": {
              "position": "top",
              "style": {
                  "lineWidth": 0,
                  "fontSize": 22,
                  "stroke": "black",
                  "fill": "orange",
                  "textAlign": "center",
                  "textBaseline": "top"
              }
          }
      },
      {
          "id": "5114251",
          "identifiedObjectPSRID": null,
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "d1ecbccb-9939-44ff-a0a9-30495b753f52_02",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n2号配电室1号\n主变低压侧",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30200002_1000826895_02",
          "identifiedObjectName": "中和桥30号2号配电室1号主变低压侧",
          "labels": [
              "Bus"
          ],
          "neo4jType": "Bus",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Bus",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "circle",
          "size": 30,
          "style": {
              "fill": "red",
              "stroke": "red",
              "lineWidth": 2
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5114252",
          "identifiedObjectPSRID": null,
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "d1ecbccb-9939-44ff-a0a9-30495b753f52_02_03",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n2号配电室1号\n主变低压侧负\n载",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30200002_1000826895_02_03",
          "identifiedObjectName": "中和桥30号2号配电室1号主变低压侧负载",
          "labels": [
              "Load"
          ],
          "neo4jType": "Load",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Load",
          "iconType": "Load",
          "type": "circle",
          "size": 20,
          "style": {
              "fill": "rgba(0,0,0,0.5)",
              "stroke": "rgba(0,0,0,0.5)",
              "lineWidth": 3
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#fff"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "#fff"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "#fff"
              }
          }
      },
      {
          "id": "5601399",
          "identifiedObjectPSRID": "PD_0302_007d5b3b-aaa6-41cb-bcd5-2084444237bc",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "007d5b3b-aaa6-41cb-bcd5-2084444237bc",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n2号配电室3\n号主变",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30200002_1000826894",
          "identifiedObjectName": "中和桥30号2号配电室3号主变",
          "labels": [
              "PowerTransformer"
          ],
          "neo4jType": "PowerTransformer",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "PowerTransformer",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "PowerTransformer",
          "size": [
              90,
              50
          ],
          "labelCfg": {
              "position": "top",
              "style": {
                  "lineWidth": 0,
                  "fontSize": 22,
                  "stroke": "black",
                  "fill": "orange",
                  "textAlign": "center",
                  "textBaseline": "top"
              }
          }
      },
      {
          "id": "5114253",
          "identifiedObjectPSRID": null,
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "007d5b3b-aaa6-41cb-bcd5-2084444237bc_02",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n2号配电室3\n号主变低压侧",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30200002_1000826894_02",
          "identifiedObjectName": "中和桥30号2号配电室3号主变低压侧",
          "labels": [
              "Bus"
          ],
          "neo4jType": "Bus",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Bus",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "circle",
          "size": 30,
          "style": {
              "fill": "red",
              "stroke": "red",
              "lineWidth": 2
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5114254",
          "identifiedObjectPSRID": null,
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "007d5b3b-aaa6-41cb-bcd5-2084444237bc_02_03",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n2号配电室3\n号主变低压侧\n负载",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30200002_1000826894_02_03",
          "identifiedObjectName": "中和桥30号2号配电室3号主变低压侧负载",
          "labels": [
              "Load"
          ],
          "neo4jType": "Load",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Load",
          "iconType": "Load",
          "type": "circle",
          "size": 20,
          "style": {
              "fill": "rgba(0,0,0,0.5)",
              "stroke": "rgba(0,0,0,0.5)",
              "lineWidth": 3
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#fff"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "#fff"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "#fff"
              }
          }
      },
      {
          "id": "5601712",
          "identifiedObjectPSRID": "PD_0302_6b0609eb-892e-4570-ab41-b7bc1285341d",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "6b0609eb-892e-4570-ab41-b7bc1285341d",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n3号箱变主变",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30200002_1000826901",
          "identifiedObjectName": "中和桥30号3号箱变主变",
          "labels": [
              "PowerTransformer"
          ],
          "neo4jType": "PowerTransformer",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "PowerTransformer",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "PowerTransformer",
          "size": [
              90,
              50
          ],
          "labelCfg": {
              "position": "top",
              "style": {
                  "lineWidth": 0,
                  "fontSize": 22,
                  "stroke": "black",
                  "fill": "orange",
                  "textAlign": "center",
                  "textBaseline": "top"
              }
          }
      },
      {
          "id": "5114255",
          "identifiedObjectPSRID": null,
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "6b0609eb-892e-4570-ab41-b7bc1285341d_02",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n3号箱变主变\n低压侧",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30200002_1000826901_02",
          "identifiedObjectName": "中和桥30号3号箱变主变低压侧",
          "labels": [
              "Bus"
          ],
          "neo4jType": "Bus",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Bus",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "circle",
          "size": 30,
          "style": {
              "fill": "red",
              "stroke": "red",
              "lineWidth": 2
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "red"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "red"
              }
          }
      },
      {
          "id": "5114256",
          "identifiedObjectPSRID": null,
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "6b0609eb-892e-4570-ab41-b7bc1285341d_02_03",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "中和桥30号\n3号箱变主变\n低压侧负载",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30200002_1000826901_02_03",
          "identifiedObjectName": "中和桥30号3号箱变主变低压侧负载",
          "labels": [
              "Load"
          ],
          "neo4jType": "Load",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "Load",
          "iconType": "Load",
          "type": "circle",
          "size": 20,
          "style": {
              "fill": "rgba(0,0,0,0.5)",
              "stroke": "rgba(0,0,0,0.5)",
              "lineWidth": 3
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "black",
                  "fontSize": 22
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#fff"
          },
          "nodeStateStyles": {
              "active": {
                  "opacity": 1,
                  "stroke": "#fff"
              },
              "inactive": {
                  "opacity": 0.2
              },
              "high": {
                  "opacity": 1,
                  "stroke": "#fff"
              }
          }
      },
      {
          "id": "5534256",
          "identifiedObjectPSRID": "PD_0307_dbf55712-4447-4ff2-8dbc-b7e701d2aee2",
          "collObjId": null,
          "loadType": null,
          "identifiedObjectPowerSystemResourceID": "dbf55712-4447-4ff2-8dbc-b7e701d2aee2",
          "hasDtu": null,
          "hasTtu": null,
          "busLineX": null,
          "busLineY": null,
          "parent": null,
          "label": "至光华路1号\n线2号环网柜1\n02间隔",
          "geoPosition": null,
          "geoName": null,
          "identifiedObjectMRID": "30700002_1000827285_06",
          "identifiedObjectName": "至光华路1号线2号环网柜102间隔",
          "labels": [
              "ContactBreaker"
          ],
          "neo4jType": "ContactBreaker",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "deviceType": "ContactBreaker",
          "anchorPoints": [
              [
                  0,
                  0.5
              ],
              [
                  1,
                  0.5
              ],
              [
                  0.5,
                  0
              ],
              [
                  0.5,
                  1
              ]
          ],
          "type": "ContactBreaker",
          "size": [
              100,
              40
          ],
          "style": {
              "fill": "white",
              "stroke": "black",
              "lineWidth": 3
          },
          "labelCfg": {
              "position": "top",
              "style": {
                  "fill": "blue",
                  "fontSize": 22,
                  "stroke": "black",
                  "textAlign": "center",
                  "textBaseline": "top"
              }
          },
          "linkPoints": {
              "top": false,
              "bottom": false,
              "left": false,
              "right": false,
              "size": 5,
              "fill": "#fff",
              "lineWidth": 1,
              "stroke": "#7afbfd"
          }
      }
  ],
  "edges": [
      {
          "id": "6115524",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": "3c8320ca6a71ba65ed170cb98ba30fc0",
          "target": "3817524",
          "source": "3817571",
          "from": "备用116断路器",
          "to": "10kV光华路1号线1号环网柜母线",
          "start": "3817571",
          "end": "3817524",
          "neo4jType": "SOLID_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineAppendWidth": 20
          },
          "edgeType": "normal"
      },
      {
          "id": "10721379",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": "310c0f2db0182b01b44aa792acb57c11",
          "target": "5601716",
          "source": "5601203",
          "from": "至中和桥30号2号配电室1号变",
          "to": "中和桥30号2号配电室I段高压母线",
          "start": "5601203",
          "end": "5601716",
          "neo4jType": "SOLID_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineAppendWidth": 20
          },
          "edgeType": "normal"
      },
      {
          "id": "10721348",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": "721933f211f54db0ba1bb3334d4f1dc9",
          "target": "5601717",
          "source": "5601202",
          "from": "至中和桥30号1号配电室101间隔",
          "to": "中和桥30号1号配电室I段高压母线",
          "start": "5601202",
          "end": "5601717",
          "neo4jType": "SOLID_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineAppendWidth": 20
          },
          "edgeType": "normal"
      },
      {
          "id": "10721387",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": "3861552b2d375d53bd0635755dd69feb",
          "target": "5601701",
          "source": "5601220",
          "from": "至中和桥30号2号配电室3号变",
          "to": "中和桥30号2号配电室III段高压母线",
          "start": "5601220",
          "end": "5601701",
          "neo4jType": "SOLID_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineAppendWidth": 20
          },
          "edgeType": "normal"
      },
      {
          "id": "10721603",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": "8ff202833e54f568e98c4a78cd65600f",
          "target": "5601657",
          "source": "5601188",
          "from": "至中和桥30号3号箱变",
          "to": "中和桥30号3号箱变高压母线",
          "start": "5601188",
          "end": "5601657",
          "neo4jType": "SOLID_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineAppendWidth": 20
          },
          "edgeType": "normal"
      },
      {
          "id": "12250305",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": "e88e32a28445fec8601ff2ce407dfd32",
          "target": "5601659",
          "source": "3817542",
          "from": "备用",
          "to": "光华路1号线2号环网柜高压母线",
          "start": "3817542",
          "end": "5601659",
          "neo4jType": "SOLID_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineAppendWidth": 20
          },
          "edgeType": "normal"
      },
      {
          "id": "12250321",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": "06b1117b93ea575485780c4c3eb360e6",
          "target": "5601699",
          "source": "5601190",
          "from": "至中和桥30号开关站101间隔",
          "to": "中和桥30号开关站I段高压母线",
          "start": "5601190",
          "end": "5601699",
          "neo4jType": "SOLID_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineAppendWidth": 20
          },
          "edgeType": "normal"
      },
      {
          "id": "12250325",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5532738",
          "source": "5601699",
          "from": "中和桥30号开关站I段高压母线",
          "to": "母联柜",
          "start": "5601699",
          "end": "5532738",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "6115523",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "3817571",
          "source": "110122",
          "from": "石门坎变",
          "to": "备用116断路器",
          "start": "110122",
          "end": "3817571",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "6115525",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "3257206",
          "source": "3817524",
          "from": "10kV光华路1号线1号环网柜母线",
          "to": "南京绿地地铁五号线项目投资发展有限公司（地铁五号线小天堂站盾构机）负载",
          "start": "3817524",
          "end": "3257206",
          "neo4jType": "DOTTED_BUS_LINE",
          "style": {
              "radius": 5,
              "offset": 0,
              "endArrow": {
                  "path": "M 0,0 L 20,10 L 20,-10 Z",
                  "fill": "black",
                  "strokeOpacity": 0
              },
              "stroke": "black",
              "lineWidth": 5
          },
          "edgeType": "load"
      },
      {
          "id": "12250327",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5534255",
          "source": "5601717",
          "from": "中和桥30号1号配电室I段高压母线",
          "to": "母联柜",
          "start": "5601717",
          "end": "5534255",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "10721337",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "3817542",
          "source": "3817524",
          "from": "10kV光华路1号线1号环网柜母线",
          "to": "备用",
          "start": "3817524",
          "end": "3817542",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "10721347",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5601202",
          "source": "5601699",
          "from": "中和桥30号开关站I段高压母线",
          "to": "至中和桥30号1号配电室101间隔",
          "start": "5601699",
          "end": "5601202",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "10721349",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5601393",
          "source": "5601717",
          "from": "中和桥30号1号配电室I段高压母线",
          "to": "中和桥30号1号配电室3号主变",
          "start": "5601717",
          "end": "5601393",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "10721352",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5114243",
          "source": "5601393",
          "from": "中和桥30号1号配电室3号主变",
          "to": "中和桥30号1号配电室3号主变低压侧",
          "start": "5601393",
          "end": "5114243",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "10721354",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5114244",
          "source": "5114243",
          "from": "中和桥30号1号配电室3号主变低压侧",
          "to": "中和桥30号1号配电室3号主变低压侧负载",
          "start": "5114243",
          "end": "5114244",
          "neo4jType": "DOTTED_BUS_LINE",
          "style": {
              "radius": 5,
              "offset": 0,
              "endArrow": {
                  "path": "M 0,0 L 20,10 L 20,-10 Z",
                  "fill": "black",
                  "strokeOpacity": 0
              },
              "stroke": "black",
              "lineWidth": 5
          },
          "edgeType": "load"
      },
      {
          "id": "10721369",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5601395",
          "source": "5601717",
          "from": "中和桥30号1号配电室I段高压母线",
          "to": "中和桥30号1号配电室1号主变",
          "start": "5601717",
          "end": "5601395",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "10721370",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5114249",
          "source": "5601395",
          "from": "中和桥30号1号配电室1号主变",
          "to": "中和桥30号1号配电室1号主变低压侧",
          "start": "5601395",
          "end": "5114249",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "10721375",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5114250",
          "source": "5114249",
          "from": "中和桥30号1号配电室1号主变低压侧",
          "to": "中和桥30号1号配电室1号主变低压侧负载",
          "start": "5114249",
          "end": "5114250",
          "neo4jType": "DOTTED_BUS_LINE",
          "style": {
              "radius": 5,
              "offset": 0,
              "endArrow": {
                  "path": "M 0,0 L 20,10 L 20,-10 Z",
                  "fill": "black",
                  "strokeOpacity": 0
              },
              "stroke": "black",
              "lineWidth": 5
          },
          "edgeType": "load"
      },
      {
          "id": "10721376",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5601203",
          "source": "5601699",
          "from": "中和桥30号开关站I段高压母线",
          "to": "至中和桥30号2号配电室1号变",
          "start": "5601699",
          "end": "5601203",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "10721380",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5601398",
          "source": "5601716",
          "from": "中和桥30号2号配电室I段高压母线",
          "to": "中和桥30号2号配电室1号主变",
          "start": "5601716",
          "end": "5601398",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "10721382",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5114251",
          "source": "5601398",
          "from": "中和桥30号2号配电室1号主变",
          "to": "中和桥30号2号配电室1号主变低压侧",
          "start": "5601398",
          "end": "5114251",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "10721385",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5114252",
          "source": "5114251",
          "from": "中和桥30号2号配电室1号主变低压侧",
          "to": "中和桥30号2号配电室1号主变低压侧负载",
          "start": "5114251",
          "end": "5114252",
          "neo4jType": "DOTTED_BUS_LINE",
          "style": {
              "radius": 5,
              "offset": 0,
              "endArrow": {
                  "path": "M 0,0 L 20,10 L 20,-10 Z",
                  "fill": "black",
                  "strokeOpacity": 0
              },
              "stroke": "black",
              "lineWidth": 5
          },
          "edgeType": "load"
      },
      {
          "id": "10721386",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5601220",
          "source": "5601699",
          "from": "中和桥30号开关站I段高压母线",
          "to": "至中和桥30号2号配电室3号变",
          "start": "5601699",
          "end": "5601220",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "10721389",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5601399",
          "source": "5601701",
          "from": "中和桥30号2号配电室III段高压母线",
          "to": "中和桥30号2号配电室3号主变",
          "start": "5601701",
          "end": "5601399",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "10721390",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5114253",
          "source": "5601399",
          "from": "中和桥30号2号配电室3号主变",
          "to": "中和桥30号2号配电室3号主变低压侧",
          "start": "5601399",
          "end": "5114253",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "10721392",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5114254",
          "source": "5114253",
          "from": "中和桥30号2号配电室3号主变低压侧",
          "to": "中和桥30号2号配电室3号主变低压侧负载",
          "start": "5114253",
          "end": "5114254",
          "neo4jType": "DOTTED_BUS_LINE",
          "style": {
              "radius": 5,
              "offset": 0,
              "endArrow": {
                  "path": "M 0,0 L 20,10 L 20,-10 Z",
                  "fill": "black",
                  "strokeOpacity": 0
              },
              "stroke": "black",
              "lineWidth": 5
          },
          "edgeType": "load"
      },
      {
          "id": "10721393",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5601188",
          "source": "5601699",
          "from": "中和桥30号开关站I段高压母线",
          "to": "至中和桥30号3号箱变",
          "start": "5601699",
          "end": "5601188",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "10721801",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5601712",
          "source": "5601657",
          "from": "中和桥30号3号箱变高压母线",
          "to": "中和桥30号3号箱变主变",
          "start": "5601657",
          "end": "5601712",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "10721989",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5114255",
          "source": "5601712",
          "from": "中和桥30号3号箱变主变",
          "to": "中和桥30号3号箱变主变低压侧",
          "start": "5601712",
          "end": "5114255",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "10722116",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5114256",
          "source": "5114255",
          "from": "中和桥30号3号箱变主变低压侧",
          "to": "中和桥30号3号箱变主变低压侧负载",
          "start": "5114255",
          "end": "5114256",
          "neo4jType": "DOTTED_BUS_LINE",
          "style": {
              "radius": 5,
              "offset": 0,
              "endArrow": {
                  "path": "M 0,0 L 20,10 L 20,-10 Z",
                  "fill": "black",
                  "strokeOpacity": 0
              },
              "stroke": "black",
              "lineWidth": 5
          },
          "edgeType": "load"
      },
      {
          "id": "12250309",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5534256",
          "source": "5601659",
          "from": "光华路1号线2号环网柜高压母线",
          "to": "至光华路1号线2号环网柜102间隔",
          "start": "5601659",
          "end": "5534256",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      },
      {
          "id": "12250312",
          "dkxId": "e2957391-5bcb-43ec-8684-e0d626e66690",
          "psrId": null,
          "target": "5601190",
          "source": "5601659",
          "from": "光华路1号线2号环网柜高压母线",
          "to": "至中和桥30号开关站101间隔",
          "start": "5601659",
          "end": "5601190",
          "neo4jType": "DOTTED_BUS_LINE",
          "type": "line",
          "style": {
              "radius": 1,
              "offset": 0,
              "endArrow": false,
              "stroke": "black",
              "lineWidth": 5,
              "lineDash": [
                  5
              ],
              "lineAppendWidth": 20
          },
          "edgeType": "dottedBusLine"
      }
  ]
}
// const data = {
//   "nodes": [
//       {
//           "id": "237626",
//           "identifiedObjectPSRID": "PD_0305_130660082",
//           "collObjId": null,
//           "loadType": null,
//           "identifiedObjectPowerSystemResourceID": "130660082",
//           "hasDtu": null,
//           "hasTtu": null,
//           "busLineX": null,
//           "busLineY": null,
//           "parent": null,
//           "label": "博世#2线22\n1断路器",
//           "geoPosition": null,
//           "geoName": null,
//           "identifiedObjectMRID": "30500000_890564",
//           "identifiedObjectName": "博世#2线221断路器",
//           "labels": [
//               "Breaker"
//           ],
//           "neo4jType": "Breaker",
//           "dkxId": "10DKX-218657",
//           "deviceType": "Breaker",
//           "anchorPoints": [
//               [
//                   0,
//                   0.5
//               ],
//               [
//                   1,
//                   0.5
//               ],
//               [
//                   0.5,
//                   0
//               ],
//               [
//                   0.5,
//                   1
//               ]
//           ],
//           "type": "Breaker",
//           "size": [
//               100,
//               50
//           ],
//           "style": {
//               "fill": "blue",
//               "stroke": "black",
//               "lineWidth": 3
//           },
//           "labelCfg": {
//               "position": "top",
//               "style": {
//                   "fill": "blue",
//                   "fontSize": 22,
//                   "stroke": "black",
//                   "textAlign": "center",
//                   "textBaseline": "top"
//               }
//           },
//           "linkPoints": {
//               "top": false,
//               "bottom": false,
//               "left": false,
//               "right": false,
//               "size": 5,
//               "fill": "#fff",
//               "lineWidth": 1,
//               "stroke": "#7afbfd"
//           },
//           "nodeStateStyles": {
//               "active": {
//                   "opacity": 1,
//                   "stroke": "red"
//               },
//               "inactive": {
//                   "opacity": 0.2
//               },
//               "high": {
//                   "opacity": 1,
//                   "stroke": "red"
//               }
//           }
//       },
//       {
//           "id": "245855",
//           "identifiedObjectPSRID": "PD_0311_df6e4152caff80808156383ea50156df6c94017b72",
//           "collObjId": null,
//           "loadType": null,
//           "identifiedObjectPowerSystemResourceID": "df6e4152caff80808156383ea50156df6c94017b72",
//           "hasDtu": null,
//           "hasTtu": null,
//           "busLineX": null,
//           "busLineY": null,
//           "parent": null,
//           "label": "20kV博世#\n2线#1环网柜\n母线间隔母线",
//           "geoPosition": null,
//           "geoName": null,
//           "identifiedObjectMRID": "31100000_1569750",
//           "identifiedObjectName": "20kV博世#2线#1环网柜母线间隔母线",
//           "labels": [
//               "BusbarSection"
//           ],
//           "neo4jType": "BusbarSection",
//           "dkxId": "10DKX-218657",
//           "deviceType": "Bus",
//           "anchorPoints": [
//               [
//                   0,
//                   0.5
//               ],
//               [
//                   1,
//                   0.5
//               ],
//               [
//                   0.5,
//                   0
//               ],
//               [
//                   0.5,
//                   1
//               ]
//           ],
//           "type": "circle",
//           "size": 30,
//           "style": {
//               "fill": "red",
//               "stroke": "red",
//               "lineWidth": 2
//           },
//           "labelCfg": {
//               "position": "top",
//               "style": {
//                   "fill": "black",
//                   "fontSize": 22
//               }
//           },
//           "linkPoints": {
//               "top": false,
//               "bottom": false,
//               "left": false,
//               "right": false,
//               "size": 5,
//               "fill": "#fff",
//               "lineWidth": 1,
//               "stroke": "#7afbfd"
//           },
//           "nodeStateStyles": {
//               "active": {
//                   "opacity": 1,
//                   "stroke": "red"
//               },
//               "inactive": {
//                   "opacity": 0.2
//               },
//               "high": {
//                   "opacity": 1,
//                   "stroke": "red"
//               }
//           }
//       },
//       {
//           "id": "122984",
//           "identifiedObjectPSRID": "PD_zf01_123038966",
//           "collObjId": null,
//           "loadType": null,
//           "identifiedObjectPowerSystemResourceID": "123038966",
//           "hasDtu": null,
//           "hasTtu": null,
//           "busLineX": null,
//           "busLineY": null,
//           "parent": null,
//           "label": "丁家山变",
//           "geoPosition": null,
//           "geoName": null,
//           "identifiedObjectMRID": "30000000_3146391",
//           "identifiedObjectName": "丁家山变",
//           "labels": [
//               "NewSubstation"
//           ],
//           "neo4jType": "NewSubstation",
//           "dkxId": "10DKX-218657",
//           "deviceType": "NewSubstation",
//           "anchorPoints": [
//               [
//                   0,
//                   0.5
//               ],
//               [
//                   1,
//                   0.5
//               ],
//               [
//                   0.5,
//                   0
//               ],
//               [
//                   0.5,
//                   1
//               ]
//           ],
//           "type": "rect",
//           "size": [
//               100,
//               100
//           ],
//           "style": {
//               "fill": "#7afbfd",
//               "stroke": "black",
//               "lineWidth": 5
//           },
//           "labelCfg": {
//               "position": "top",
//               "style": {
//                   "fill": "black",
//                   "fontSize": 24
//               }
//           },
//           "linkPoints": {
//               "top": false,
//               "bottom": false,
//               "left": false,
//               "right": false,
//               "size": 5,
//               "fill": "#fff",
//               "lineWidth": 1,
//               "stroke": "#fff"
//           }
//       },
//       {
//           "id": "533944",
//           "identifiedObjectPSRID": "PD_0307_df6e45169eff80808156383ea50156df6c97bd7b82",
//           "collObjId": null,
//           "loadType": null,
//           "identifiedObjectPowerSystemResourceID": "df6e45169eff80808156383ea50156df6c97bd7b82",
//           "hasDtu": null,
//           "hasTtu": null,
//           "busLineX": null,
//           "busLineY": null,
//           "parent": null,
//           "label": "至博世#1线\n#2环网柜102\n间隔",
//           "geoPosition": null,
//           "geoName": null,
//           "identifiedObjectMRID": "30700002_2844935_06",
//           "identifiedObjectName": "至博世#1线#2环网柜102间隔",
//           "labels": [
//               "ContactBreaker"
//           ],
//           "neo4jType": "ContactBreaker",
//           "dkxId": "10DKX-218657",
//           "deviceType": "ContactBreaker",
//           "anchorPoints": [[0, .5], [1, .5], [.5, 0], [.5, 1]],
//           "type": "ContactBreaker",
//           "size": [
//               100,
//               40
//           ],
//           "style": {
//               "fill": "white",
//               "stroke": "black",
//               "lineWidth": 3
//           },
//           "labelCfg": {
//               "position": "top",
//               "style": {
//                   "fill": "blue",
//                   "fontSize": 22,
//                   "stroke": "black",
//                   "textAlign": "center",
//                   "textBaseline": "top"
//               }
//           },
//           "linkPoints": {
//               "top": false,
//               "bottom": false,
//               "left": false,
//               "right": false,
//               "size": 5,
//               "fill": "#fff",
//               "lineWidth": 1,
//               "stroke": "#7afbfd"
//           }
//       },
//       {
//           "id": "545359",
//           "identifiedObjectPSRID": null,
//           "collObjId": null,
//           "loadType": null,
//           "identifiedObjectPowerSystemResourceID": "110000971130_SBID000000A7A9C7D2C76A4B4CBFA9FE1AE3EE646C_03",
//           "hasDtu": null,
//           "hasTtu": null,
//           "busLineX": null,
//           "busLineY": null,
//           "parent": null,
//           "label": "博世汽车部\n件（南京）有\n限公司10*160\n0+8*1250+2500+2*50kVA至博世#1线负载",
//           "geoPosition": null,
//           "geoName": null,
//           "identifiedObjectMRID": "11000000_110000971130_SBID000000A7A9C7D2C76A4B4CBFA9FE1AE3EE646C_03",
//           "identifiedObjectName": "博世汽车部件（南京）有限公司10*1600+8*1250+2500+2*50kVA至博世#1线负载",
//           "labels": [
//               "Load"
//           ],
//           "neo4jType": "Load",
//           "dkxId": "10DKX-218657",
//           "deviceType": "Load",
//           "iconType": "Load",
//           "type": "circle",
//           "size": 20,
//           "style": {
//               "fill": "rgba(0,0,0,0.5)",
//               "stroke": "rgba(0,0,0,0.5)",
//               "lineWidth": 3
//           },
//           "labelCfg": {
//               "position": "top",
//               "style": {
//                   "fill": "black",
//                   "fontSize": 22
//               }
//           },
//           "linkPoints": {
//               "top": false,
//               "bottom": false,
//               "left": false,
//               "right": false,
//               "size": 5,
//               "fill": "#fff",
//               "lineWidth": 1,
//               "stroke": "#fff"
//           },
//           "nodeStateStyles": {
//               "active": {
//                   "opacity": 1,
//                   "stroke": "#fff"
//               },
//               "inactive": {
//                   "opacity": 0.2
//               },
//               "high": {
//                   "opacity": 1,
//                   "stroke": "#fff"
//               }
//           }
//       }
//   ],
//   "edges": [
//       {
//           "id": "1233121",
//           "dkxId": "10DKX-218657",
//           "psrId": "ea5cff9523878022207deb8c2a7aa224",
//           "target": "245855",
//           "source": "237626",
//           "from": "博世#2线221断路器",
//           "to": "20kV博世#2线#1环网柜母线间隔母线",
//           "start": "237626",
//           "end": "245855",
//           "neo4jType": "SOLID_BUS_LINE",
//           "type": "line",
//           "style": {
//               "radius": 1,
//               "offset": 0,
//               "endArrow": false,
//               "stroke": "black",
//               "lineWidth": 5,
//               "lineAppendWidth": 20
//           },
//           "edgeType": "normal"
//       },
//       {
//           "id": "1233120",
//           "dkxId": "10DKX-218657",
//           "psrId": null,
//           "target": "237626",
//           "source": "122984",
//           "from": "丁家山变",
//           "to": "博世#2线221断路器",
//           "start": "122984",
//           "end": "237626",
//           "neo4jType": "DOTTED_BUS_LINE",
//           "type": "line",
//           "style": {
//               "radius": 1,
//               "offset": 0,
//               "endArrow": false,
//               "stroke": "black",
//               "lineWidth": 5,
//               "lineDash": [
//                   5
//               ],
//               "lineAppendWidth": 20
//           },
//           "edgeType": "dottedBusLine"
//       },
//       {
//           "id": "1233122",
//           "dkxId": "10DKX-218657",
//           "psrId": null,
//           "target": "533944",
//           "source": "245855",
//           "from": "20kV博世#2线#1环网柜母线间隔母线",
//           "to": "至博世#1线#2环网柜102间隔",
//           "start": "245855",
//           "end": "533944",
//           "neo4jType": "DOTTED_BUS_LINE",
//           "type": "line",
//           "style": {
//               "radius": 1,
//               "offset": 0,
//               "endArrow": false,
//               "stroke": "black",
//               "lineWidth": 5,
//               "lineDash": [
//                   5
//               ],
//               "lineAppendWidth": 20
//           },
//           "edgeType": "dottedBusLine"
//       },
//       {
//           "id": "1233123",
//           "dkxId": "10DKX-218657",
//           "psrId": null,
//           "target": "545359",
//           "source": "245855",
//           "from": "20kV博世#2线#1环网柜母线间隔母线",
//           "to": "博世汽车部件（南京）有限公司10*1600+8*1250+2500+2*50kVA至博世#1线负载",
//           "start": "245855",
//           "end": "545359",
//           "neo4jType": "DOTTED_BUS_LINE",
//           "style": {
//               "radius": 5,
//               "offset": 0,
//               "endArrow": {
//                   "path": "M 0,0 L 20,10 L 20,-10 Z",
//                   "fill": "black",
//                   "strokeOpacity": 0
//               },
//               "stroke": "black",
//               "lineWidth": 5
//           },
//           "edgeType": "load"
//       }
//   ]
// }

const u={
  graphlib:graphlib,
  layout:98123,
  debug:27570,
  util:{
    time:11138,
    notime:11138
  }
}
console.log(_lodash);

var  c={
    orderBy:_lodash.orderBy,
    maxBy:_lodash.maxBy
};


console.log(c);


// function groupBy( array , f ) {
//   let groups = {};
//   array.forEach( function( o ) {
//       let group = JSON.stringify( f(o) ); // ["fruits"]
//       groups[group] = groups[group] || [];
//       groups[group].push( o );
//   } );
//   return Object.keys(groups).map( function( group ) {
//       return groups[group];
//   });
// }
function groupBy( array , id ) {
  let groups = {};
  array.forEach( function( o ) {
      let group = JSON.stringify( o[id] );
      groups[group] = groups[group] || [];
      groups[group].push( o );
  });
  return Object.values(groups);
}


const layoutOption= {
  getDefaultCfg() {
      return {
          lineLength: 200,
          offsetRatio: 1,
          nodeSpecRatio: 1,
          optimizeSpace: !1,
          screenRatio: 1.6,
          tight: !0,
          weight: {}
      }
  },
  init(t) {
      const e = this;
          e.graph && (e.graph = void 0),
          e.graph = new u.graphlib.Graph,
          e.graphlib = e.graph,
          e.nodes = t.nodes,
          e.edges = t.edges,
          e.nodes.map((t=>{
                  e.graph.setNode(t.id, t.label)
              }
          )),
          e.edges.map((t=>{
                  e.graph.setEdge(t.source, t.target)
              }
          ))
  },
  execute: function() {
      const t = this;
      let {nodes: e, graph: n, lineLength: r, nodeSpecRatio: i, optimizeSpace: o, tight: a, weight: s} = t;
      if (0 == e.length)
          return;
      let l = !1;
      const c=[]
      // void 0 != s && Object.keys(s).length > 0 && (l = !0);
      let f = t.getDefaultCfg();
      if (void 0 == r && (r = f.lineLength),
      void 0 == i && (i = f.nodeSpecRatio),
      void 0 == o && (o = f.optimizeSpace),
      void 0 == a && (a = f.tight,
          console.log("紧凑布局")),
          !u.graphlib.alg.isAcyclic(n))
          return void alert("数据异常，存在环，请联系管理员");
      let h = new Map
          , d = f.offsetRatio
          , p = d * r
          , g = i * r;
      a && (g = 0);
      let v = new Map
          , y = new Map
          , m = new Map
          , b = new Map
          , x = new Map;
      e.map((t=>{
              y.has(t.id) || y.set(t.id, t)
          }
      ));
      let w = u.graphlib.alg.dijkstra(n, n.sources()[0], (()=>1));
      t.allPath = w;
      let _, E = 0;
      Object.keys(w).map((t=>{
              let e = 1;
              if (l) {
                  let n = y.get(t);
                  n.labels.map((t=>{
                          void 0 != s[t] && (e = s[t])
                      }
                  ))
              }
              w[t].distance * e >= E && (E = w[t].distance * e,
                  _ = t)
          }
      ));
      let S = [_];
      while (1) {
          let t = n.predecessors(_);
          if (void 0 == t || 0 == t.length)
              break;
          _ = t,
              S.push(t[0])
      }
      S.reverse(),
          v.set(n.sources()[0], S);
      let M = []
          , k = {
          "支线编码": n.sources()[0],
          "支线名称": n.node(n.sources()[0]),
          "上级支线编码": "",
          "支线级别": 0,
          "接入支线的顺序": 1
      };
      M.push(k);
      let A = 1;
      for (let u = 0; u < S.length; u++) {
          let t = n.successors(S[u]).filter((t=>t != S[u + 1]));
          h.set(S[u], t.length),
              t.map((t=>{
                      let e = {
                          "支线编码": t,
                          "支线名称": n.node(t),
                          "上级支线编码": n.sources()[0],
                          "支线级别": 1,
                          "接入支线的顺序": A++,
                          "接入的节点": S[u]
                      };
                      M.push(e)
                  }
              ))
      }
      let C = 1;
      while (1) {
          let t = M.filter((t=>t.支线级别 == C));
          if (0 == t.length || C > 20) {
              0 != t.length && alert("超过系统处理能力");
              break
          }
          t.map((t=>{
                  let e, r = u.graphlib.alg.dijkstra(n, t.支线编码, (()=>1)), i = 0;
                  Object.keys(r).map((t=>{
                          let n = 1;
                          if (l) {
                              let e = y.get(t);
                              e.labels.map((t=>{
                                      void 0 != s[t] && (n = s[t])
                                  }
                              ))
                          }
                          r[t].distance != 1 / 0 && r[t].distance * n >= i && (i = r[t].distance * n,
                              e = t)
                      }
                  ));
                  let o = [e];
                  if (e === t.支线编码)
                      ;
                  else {
                      while (1) {
                          let r = n.predecessors(e);
                          if (void 0 == r || 0 == r.length || r[0] == t.支线编码)
                              break;
                          e = r[0],
                              o.push(r[0])
                      }
                      o.reverse(),
                          o.splice(0, 0, t.支线编码)
                  }
                  v.set(t.支线编码, o);
                  let a = 1;
                  for (let s = 0; s < o.length; s++) {
                      let e = n.successors(o[s])
                          , r = e.filter((t=>t != o[s + 1]));
                      h.set(o[s], r.length),
                          r.map((e=>{
                                  let r = {
                                      "支线编码": e,
                                      "支线名称": n.node(e),
                                      "上级支线编码": t.支线编码,
                                      "支线级别": t.支线级别 + 1,
                                      "接入支线的顺序": a++,
                                      "接入的节点": o[s]
                                  };
                                  M.push(r)
                              }
                          ))
                  }
              }
          )),
              C++
      }
      M.map((t=>{
              t.分支长度 = v.get(t.支线编码).length
          }
      ));
      let T = _lodash.groupBy(M, "上级支线编码");

      Object.keys(T).map((t=>{
              if ("" != t) {
                  let e = T[t];
                  if (e.length > 1) {
                      let t = new Map;
                      _lodash.orderBy(e, ["接入支线的顺序"], ["asc"]).map((e=>{
                              t.has(e.接入的节点) ? (e.old接入支线的顺序 = e.接入支线的顺序,
                                  e.接入支线的顺序 = t.get(e.接入的节点)) : t.set(e.接入的节点, e.接入支线的顺序)
                          }
                      ));
                      let n = _lodash.orderBy(e, ["接入支线的顺序", "分支长度"], ["asc", "asc"]);
                      n.map(((t,e)=>{
                              t.接入支线的顺序 = e + 1
                          }
                      ))
                  }
              }
          }
      )),
          M = _lodash.orderBy(M, ["支线级别", "接入支线的顺序"], ["asc", "asc"]),
          M.map((t=>{
                  m.set(t.支线编码, t)
              }
          )),
          M.filter((t=>0 == t.支线级别)).map((t=>{
                  t.旋转角度 = 0,
                      t.支线数量 = M.filter((e=>e.上级支线编码 == t.支线编码)).length,
                      t.x = 0,
                      t.y = 0
              }
          )),
          M.filter((t=>0 != t.支线级别)).map((t=>{
                  let e = [t.接入支线的顺序];
                  t.旋转角度 = 90 * (e % 2 == 0 ? 1 : -1),
                      t.支线数量 = M.filter((e=>e.上级支线编码 == t.支线编码)).length
              }
          )),
          M.map((t=>{
                  t.id = t.支线编码;
                  let e = []
                      , n = M.find((e=>e.支线编码 == t.上级支线编码));
                  while (void 0 != n)
                      e.push(n.旋转角度),
                          n = M.find((t=>t.支线编码 == n.上级支线编码));
                  let r = t.旋转角度;
                  e.map((t=>{
                          r += t
                      }
                  )),
                      t.roFinal = r % 360
              }
          ));
      let I = _lodash.maxBy(M, "支线级别");
      for (let u = I.支线级别; u >= 0; u--)
          M.filter((t=>t.支线级别 == u)).map((t=>{
                  let e = v.get(t.支线编码)
                      , n = 0
                      , i = 0
                      , o = 0;
                  if (t.支线数量 > 0) {
                      let a = M.filter((e=>e.上级支线编码 == t.支线编码))
                          , s = a.filter((t=>t.接入支线的顺序 % 2 != 0))
                          , u = a.filter((t=>t.接入支线的顺序 % 2 == 0));
                      e.map((t=>{
                              let e = a.filter((e=>e.接入的节点 === t));
                              if (0 == e.length)
                                  o += r,
                                      b.set(t, o);
                              else if (1 == e.length) {
                                  o += r;
                                  let a = e[0].接入支线的顺序 % 2 != 0
                                      , s = a ? e[0].q : e[0].h
                                      , u = a ? e[0].h : e[0].q;
                                  s < .2 * r && (s = r),
                                  u < .2 * r && (u = r),
                                      a ? (n += s,
                                          o = _lodash.maxBy([n, o]),
                                          n = _lodash.maxBy([n, o]),
                                          n += u) : (i += s,
                                          o = _lodash.maxBy([i, o]),
                                          i = _lodash.maxBy([i, o]),
                                          i += u),
                                      b.set(t, o)
                              } else if (2 == e.length) {
                                  o += r;
                                  let a = 0
                                      , s = 0
                                      , u = e.find((t=>t.接入支线的顺序 % 2 != 0))
                                      , l = e.find((t=>t.接入支线的顺序 % 2 == 0))
                                      , {q: f, h: h} = u;
                                  f < .2 * r && (f = r),
                                  h < .2 * r && (h = r),
                                      n += f,
                                      a = _lodash.maxBy([n, o]);
                                  let {q: d, h: p} = l;
                                  p < .2 * r && (p = r),
                                  d < .2 * r && (d = r),
                                      i += p,
                                      s = _lodash.maxBy([i, o]),
                                      o = _lodash.maxBy([o, a, s]),
                                      i = _lodash.maxBy([i, o]),
                                      n = _lodash.maxBy([n, o]),
                                      i += d,
                                      n += h,
                                      b.set(t, o)
                              } else {
                                  o += r;
                                  let a = parseInt((e.length + 1) / 2)
                                      , s = a - 1
                                      , u = {};
                                  for (let t = 0; t < e.length; t++)
                                      if (t < s || t > a) {
                                          let a = e[t].接入支线的顺序 % 2 != 0
                                              , s = a ? e[t].q : e[t].h
                                              , l = a ? e[t].h : e[t].q;
                                          s < .2 * r && (s = r),
                                          l < .2 * r && (l = r),
                                              a ? (n += s,
                                                  n = _lodash.maxBy([n, o]),
                                                  u[e[t].支线编码] = n,
                                                  n += l) : (i += s,
                                                  i = _lodash.maxBy([i, o]),
                                                  u[e[t].支线编码] = i,
                                                  i += l)
                                      } else if (t == s) {
                                          let a = 0
                                              , s = 0
                                              , l = e[t].接入支线的顺序 % 2 != 0 ? e[t] : e[t + 1]
                                              , f = e[t].接入支线的顺序 % 2 == 0 ? e[t] : e[t + 1]
                                              , {q: h, h: d} = l;
                                          h < .2 * r && (h = r),
                                          d < .2 * r && (d = r),
                                              n += h,
                                              a = _lodash.maxBy([n, o]);
                                          let {q: p, h: g} = f;
                                          g < .2 * r && (g = r),
                                          p < .2 * r && (p = r),
                                              i += g,
                                              s = _lodash.maxBy([i, o]),
                                              o = _lodash.maxBy([o, a, s]),
                                              i = _lodash.maxBy([i, o]),
                                              n = _lodash.maxBy([n, o]),
                                              u[l.支线编码] = o,
                                              u[f.支线编码] = o,
                                              i += p,
                                              n += d
                                      }
                                  b.set(t, o),
                                      Object.keys(u).map((t=>{
                                              u[t] = o - u[t]
                                          }
                                      )),
                                      console.warn(u),
                                      x.set(t, u)
                              }
                          }
                      ));
                      let l = _lodash.maxBy(s, "g")
                          , f = _lodash.maxBy(u, "g");
                      t.q = l ? l.g : g,
                          t.h = f ? f.g : g,
                          t.g = _lodash.max([o, n, i]) + p,
                      "" == t.上级支线编码 && sessionStorage.setItem("graph", JSON.stringify({
                          width: t.g,
                          height: t.h + t.q
                      }))
                  } else
                      e.map(((t,e)=>{
                              b.set(t, r * (e + 1))
                          }
                      )),
                          t.g = e.length * r + p,
                          t.q = g,
                          t.h = g
              }
          ));
      M.map((t=>{
              let e = {
                  x: -100,
                  y: 0
              };
              t.接入的节点 && (e = y.get(t.接入的节点));
              let r = t.roFinal
                  , i = "right";
              180 == r || -180 == r ? i = "left" : -90 == r || 270 == r ? i = "up" : 90 != r && -270 != r || (i = "down");
              let o = v.get(t.id);
              void 0 == o && (o = []);
              let a, {x: s, y: u} = e, c = "right";
              if (h.get(t.接入的节点) > 2) {
                  let e = x.get(t.接入的节点)
                      , n = m.get(t.上级支线编码).roFinal;
                  a = e[t.id],
                  a && (180 == n || -180 == n ? c = "left" : -90 == n || 270 == n ? c = "up" : 90 != n && -270 != n || (c = "down"))
              }
              if (a)
                  switch (i) {
                      case "right":
                          "up" == c ? u += a : u -= a;
                          break;
                      case "left":
                          "up" == c ? u += a : u -= a;
                          break;
                      case "up":
                          "left" == c ? s += a : s -= a;
                          break;
                      case "down":
                          "left" == c ? s += a : s -= a;
                          break
                  }
              o.map((e=>{
                      let r = y.get(e);
                      switch (Object.assign(r, {
                          direction: i,
                          level: t.支线级别,
                          parent: t.接入的节点 || n.sources()[0]
                      }),
                          i) {
                          case "right":
                              Object.assign(r, {
                                  y: u,
                                  x: s + b.get(e)
                              });
                              break;
                          case "left":
                              Object.assign(r, {
                                  y: u,
                                  x: s - b.get(e)
                              });
                              break;
                          case "up":
                              Object.assign(r, {
                                  x: s,
                                  y: u - b.get(e)
                              });
                              break;
                          case "down":
                              Object.assign(r, {
                                  x: s,
                                  y: u + b.get(e)
                              });
                              break
                      }
                  }
              ))
          }
      ))
  },
  layout(t) {
      const e = this;
      e.init(t),
          e.execute()
  },
  updateCfg(t) {
      const e = this;
      r.Zr.mix(e, t)
  },
  destroy() {
      const t = this;
          t.positions = null,
          t.nodes = null,
          t.edges = null,
          t.destroyed = !0,
          t.graph = null
  }
}


// "./Breaker.js": 6877,
// "./ContactBreaker.js": 86680,
// "./PowerTransformer.js": 74255,
// "./Substation.js": 98494,
//自定义类型配置属性
const selfNodeOptions={
"Breaker":{
draw(t, e) {
        let {size: n, style: r} = t,
        i = void 0 != t.direction && ("up" == t.direction || "down" == t.direction), o = i ? n[1] : n[0],
        a = i ? n[0] : n[1];
    const s = e.addShape("rect", {
        name: "big-rect-shape",
        attrs: {
            x: -o / 2,
            y: -a / 2,
            width: o,
            height: a,
            lineWidth: 1,
            stroke: "black",
            fill: "rgba(0,0,0,0)",
            ...r
        },
        draggable: !0
    });
    if (t.label) {
        const n = t.labelCfg && t.labelCfg.style || {};
        let r = t.label.split("\n");
        n.text = t.label, n.x = 0, n.y = -(a / 2 + 5 + n.fontSize * r.length), e.addShape("text", {
            attrs: n,
            name: "text-shape",
            draggable: !0
        })
    }
    return s
}, afterDraw(t, e) {
    // let {size: n} = t, i = void 0 != t.direction && ("up" == t.direction || "down" == t.direction),
    //     o = i ? n[1] : n[0], a = i ? n[0] : n[1];
    // const s = e.getChildren().find((t => "big-rect-shape" === t.get("name"))), u = s.attr("width"),
    //     c = s.attr("height");
    // u === o && c === a || s.attr({x: -o / 2, y: -a / 2, width: o, height: a}), (0, r.lightNode)(t, e)
}, setState(t, e, n) {
    let {styles: r, originStyle: i} = n._cfg;
    const o = n.getContainer(), a = o.get("children")[0];
    e ? a.attr(r[t]) : a.attr(i)
}
},
"ContactBreaker":{
  draw(t, e) {
    let {size: n, style: r} = t,
        i = void 0 != t.direction && ("up" == t.direction || "down" == t.direction), o = i ? n[1] : n[0],
        a = i ? n[0] : n[1];
    const s = e.addShape("rect", {
        name: "big-rect-shape",
        attrs: {x: -o / 2, y: -a / 2, width: o, height: a, lineWidth: 1, fill: "rgba(0,0,0,0)"},
        draggable: !0
    });
    if (e.addShape("path", {
        name: "diamond-shape",
        attrs: {path: this.getPath(o, a), x: -o / 2, y: -a / 2, ...r},
        draggable: !0
    }), t.label) {
        const n = t.labelCfg && t.labelCfg.style || {};
        let r = t.label.split("\n");
        n.text = t.label, n.x = 0, n.y = -(a / 2 + 5 + n.fontSize * r.length), e.addShape("text", {
            attrs: n,
            name: "text-shape",
            draggable: !0
        })
    }
    return s
}, afterDraw(t, e) {
    // (0, r.lightNode)(t, e)
}, getPath(t, e) {
    const n = [["M", 0, 0 - e / 2], ["L", t / 2, 0], ["L", 0, e / 2], ["L", -t / 2, 0], ["z"]];
    return n
}, setState(t, e, n) {
    let {styles: r, originStyle: i} = n._cfg;
    const o = n.getContainer(), a = o.get("children")[1];
    e ? a.attr(r[t]) : a.attr(i)
}, getAnchorPoints(t) {
    let e = void 0 != t.direction && ("up" == t.direction || "down" == t.direction);
    return e ? [[.5, 0], [.5, 1]] : [[0, .5], [1, .5]]
}

},
"PowerTransformer":{
  draw(t, e) {
    let {size: n} = t, r = void 0 != t.direction && ("up" == t.direction || "down" == t.direction),
        i = r ? n[1] : n[0], o = r ? n[0] : n[1];
    const a = e.addGroup({id: "PowerTransformer", draggable: !0});
    let s = i < o ? i / 2 : o / 2, u = Math.abs(i / 2 - o / 2);
    if (a.addShape("circle", {
        attrs: {
            x: i < o ? 0 : -u,
            y: i < o ? -u : 0,
            r: s,
            lineWidth: t.high ? 6 : 3,
            stroke: t.high ? "red" : "black"
        }, name: "circle-marker-shape", draggable: !0
    }), a.addShape("circle", {
        attrs: {
            x: i < o ? 0 : u,
            y: i < o ? u : 0,
            r: s,
            lineWidth: t.high ? 6 : 3,
            stroke: t.high ? "red" : "black"
        }, name: "circle-marker-shape", draggable: !0
    }), t.label) {
        const n = t.labelCfg && t.labelCfg.style || {};
        let i = t.label.split("\n");
        n.text = t.label, n.x = 0, n.y = -20 * i.length - (r ? 60 : 35), e.addShape("text", {
            attrs: n,
            name: "text-shape",
            draggable: !0
        })
    }
    return a
}, afterDraw(t, e) {
    if (e = e.findById("PowerTransformer"), t.high && t.animateMode) {
        const t = e.get("children")[1], n = e.get("children")[2];
        t.animate((t => {
            const e = t <= .5 ? 10 * t : 10 * (1 - t);
            return {r: 25 + e}
        }), {repeat: !0, duration: 3e3, easing: "easeCubic"}), n.animate((t => {
            const e = t <= .5 ? 10 * t : 10 * (1 - t);
            return {r: 25 + e}
        }), {repeat: !0, duration: 3e3, easing: "easeCubic"})
    } else if (t.isCurrent) {
        console.log("当前节点是选中的节点");
        let t = 60;
        e.addShape("circle", {
            zIndex: -1,
            attrs: {x: 0, y: 0, r: t, fill: "white", opacity: 1},
            name: "back-circle-shape1"
        });
        const n = e.addShape("circle", {
            zIndex: -4,
            attrs: {x: 0, y: 0, r: t, fill: "red", opacity: 1},
            name: "back-circle-shape1"
        }), r = e.addShape("circle", {
            zIndex: -3,
            attrs: {x: 0, y: 0, r: t, fill: "red", opacity: 1},
            name: "back-circle-shape2"
        }), i = e.addShape("circle", {
            zIndex: -2,
            attrs: {x: 0, y: 0, r: t, fill: "red", opacity: 1},
            name: "back-circle-shape2"
        });
        e.sort(), n.animate({r: t + 100, opacity: .1}, {
            repeat: !0,
            duration: 3e3,
            easing: "easeCubic",
            delay: 0
        }), r.animate({r: t + 100, opacity: .2}, {
            repeat: !0,
            duration: 3e3,
            easing: "easeCubic",
            delay: 1e3
        }), i.animate({r: t + 100, opacity: .3}, {
            repeat: !0,
            duration: 3e3,
            easing: "easeCubic",
            delay: 2e3
        })
    }
}, getAnchorPoints(t) {
    let e = void 0 != t.direction && ("up" == t.direction || "down" == t.direction);
    return e ? [[.5, 0], [.5, 1]] : [[0, .5], [1, .5]]
}
},
"Substation":{
  draw(t, e) {
    const {size: n, style: r} = t, i = n[0], o = n[1], a = e.addGroup({id: "RingGroup", draggable: !0});
    if (t.label) {
        const n = t.labelCfg && t.labelCfg.style || {};
        let r = t.label.split("\n");
        n.text = t.label, n.x = 0, n.y = -(o / 2 + 10 + n.fontSize * r.length), e.addShape("text", {
            attrs: n,
            name: "text-shape",
            draggable: !0
        })
    }
    a.addShape("rect", {
        name: "big-rect-shape",
        attrs: {x: -i / 2, y: -o / 2, width: i, height: o, ...r},
        draggable: !0
    }), a.addShape("path", {
        name: "top-line-shape",
        attrs: {
            path: [["M", -i / 2 + 10, -o / 2 + 20], ["L", i / 2 - 10, -o / 2 + 20], ["Z"], ["M", -i / 2 + 20, -o / 2 + 20], ["L", -i / 2 + 20, o / 2 - 10], ["Z"], ["M", -i / 2 + 50, -o / 2 + 20], ["L", -i / 2 + 50, o / 2 - 10], ["Z"], ["M", -i / 2 + 80, -o / 2 + 20], ["L", -i / 2 + 80, o / 2 - 10]],
            stroke: "black",
            lineWidth: 4,
            lineAppendWidth: 4
        },
        draggable: !0
    });
    return a.addShape("rect", {
        name: "break-line-shape",
        attrs: {x: -10, y: -5, width: 20, height: 30, lineWidth: 1, stroke: "black", fill: "black"},
        draggable: !0
    }), a.addShape("rect", {
        name: "break-line-shape",
        attrs: {x: -40, y: -5, width: 20, height: 30, lineWidth: 1, stroke: "black", fill: "black"},
        draggable: !0
    }), a.addShape("rect", {
        name: "break-line-shape",
        attrs: {x: 20, y: -5, width: 20, height: 30, lineWidth: 1, stroke: "black", fill: "black"},
        draggable: !0
    }), a
}, afterDraw(t, e) {
    const {size: n} = t, r = n[0], i = n[1];
    if (t.addDTU) {
        const n = e.findById("RingGroup"), o = t.labelCfg && t.labelCfg.style || {};
        n.addShape("rect", {
            name: "dtu-shape",
            attrs: {
                x: -r / 2,
                y: i / 2,
                width: r,
                height: 30,
                lineWidth: 4,
                stroke: "black",
                fill: "rgba(236,237,238,100)"
            },
            draggable: !0
        }), n.addShape("text", {
            name: "dtu-text",
            attrs: {...o, text: "DTU", textAlign: "left", fontWeight: "bold", x: -r / 2 + 27, y: i / 2 + 5},
            draggable: !0
        })
    }
}, getAnchorPoints() {
    return [[0, .5], [1, .5], [.5, 0], [.5, 1]]
}
}
}


export {data,layoutOption,selfNodeOptions}; 