import Mock from "mockjs"

let basic = [
  {
    path: "granary",
    name: "granary",
    meta: {
      title: "粮仓"
    }
  },
  {
    path: "phone",
    name: "phone",
    meta: {
      title: "手机"
    }
  },
  {
    path: "car",
    name: "car",
    meta: {
      title: "汽车"
    }
  },
  {
    path: "earth",
    name: "earth",
    meta: {
      title: "地球"
    }
  },
  {
    path: "firstPersonControls",
    name: "firstPersonControls",
    meta: {
      title: "第一人称控制器"
    }
  },
  {
    path: "cannon",
    name: "cannon",
    meta: {
      title: "物理"
    }
  }
]

let three = [
  {
    path: "curve",
    name: "curve",
    meta: {
      title: "曲线"
    },
    children: [
      {
        path: "arcVertex",
        name: "arcVertex",
        meta: {
          title: "圆弧顶点"
        }
      },
      {
        path: "setFromPoints",
        name: "setFromPoints",
        meta: {
          title: "setFromPoints"
        }
      },
      {
        path: "arcCurve",
        name: "arcCurve",
        meta: {
          title: "弧线"
        }
      },
      {
        path: "catmullRomCurve3",
        name: "catmullRomCurve3",
        meta: {
          title: "catmullRomCurve3"
        }
      },
      {
        path: "bezierCurve",
        name: "bezierCurve",
        meta: {
          title: "贝塞尔曲线"
        }
      },
      {
        path: "curvePath",
        name: "curvePath",
        meta: {
          title: "曲线路径"
        }
      }
    ]
  },
  {
    path: "geometry",
    name: "geometry",
    meta: {
      title: "几何体"
    },
    children: [
      {
        path: "vertexIndex",
        name: "vertexIndex",
        meta: {
          title: "顶点索引"
        }
      },
      {
        path: "boxGeometry",
        name: "boxGeometry",
        meta: {
          title: "正方体"
        }
      },
      {
        path: "normal",
        name: "normal",
        meta: {
          title: "法线"
        }
      },
      {
        path: "tubeGeometry",
        name: "tubeGeometry",
        meta: {
          title: "管道缓冲几何体"
        }
      },
      {
        path: "latheGeometry",
        name: "latheGeometry",
        meta: {
          title: "车削缓冲几何体"
        }
      },
      {
        path: "shapeGeometry",
        name: "shapeGeometry",
        meta: {
          title: "形状缓冲几何体"
        }
      },
      {
        path: "extrudeGeometry",
        name: "extrudeGeometry",
        meta: {
          title: "挤压缓冲几何体"
        }
      },
      {
        path: "edgesGeometry",
        name: "edgesGeometry",
        meta: {
          title: "边缘几何体"
        }
      }
    ]
  },
  {
    path: "texture",
    name: "texture",
    meta: {
      title: "纹理贴图"
    },
    children: [
      {
        path: "uv",
        name: "uv",
        meta: {
          title: "顶点uv"
        }
      },
      {
        path: "circle",
        name: "circle",
        meta: {
          title: "圆形贴图"
        }
      },
      {
        path: "repeat",
        name: "repeat",
        meta: {
          title: "阵列"
        }
      },
      {
        path: "uvAnimation",
        name: "uvAnimation",
        meta: {
          title: "uv动画"
        }
      },
      {
        path: "canvasAnimation",
        name: "canvasAnimation",
        meta: {
          title: "canvas纹理"
        }
      }
    ]
  },
  {
    path: "vector",
    name: "vector",
    meta: {
      title: "向量"
    },
    children: [
      {
        path: "length",
        name: "length",
        meta: {
          title: "长度"
        }
      },
      {
        path: "normalize",
        name: "normalize",
        meta: {
          title: "归一化"
        }
      },
      {
        path: "cameraTranslate",
        name: "cameraTranslate",
        meta: {
          title: "相机沿着视线方向移动"
        }
      },
      {
        path: "dot",
        name: "dot",
        meta: {
          title: "点乘"
        }
      },
      {
        path: "direction",
        name: "direction",
        meta: {
          title: "判断方向"
        }
      },
      {
        path: "cross",
        name: "cross",
        meta: {
          title: "叉乘"
        }
      },
      {
        path: "matrix",
        name: "matrix",
        meta: {
          title: "矩阵"
        }
      }
    ]
  }
]

export default [
  {
    url: "/mock-server/getRouters",
    method: "get",
    response(req) {
      if (req.query.system) {
        return {
          code: 200,
          data: [
            {
              path: "/",
              name: "basic",
              meta: {
                title: "basic"
              },
              children: basic
            },
            ...three
          ]
        }
      } else {
        return {
          code: 200,
          data: [
            {
              path: "/three",
              name: "three",
              meta: {
                title: "threejs"
              },
              children: [...basic, ...three]
            }
          ]
        }
      }
    }
  }
]
