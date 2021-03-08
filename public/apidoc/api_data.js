define({ "api": [
  {
    "type": "get",
    "url": "/index/my/collectList",
    "title": "我的收藏",
    "description": "<p>我的收藏</p>",
    "group": "PC端_个人中心",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": {\n       \"list\": [],\n       \"total\": 3,\n       \"pageSize\": \"10\",\n       \"currPage\": \"3\"\n   },\n   \"code\": 200,\n   \"success\": true,\n   \"message\": \"请求成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333:/index/my/collectList"
      }
    ],
    "version": "1.0.0",
    "filename": "src/index/index.js",
    "groupTitle": "PC端_个人中心",
    "name": "GetIndexMyCollectlist"
  },
  {
    "type": "get",
    "url": "/index/my/commentList",
    "title": "我评论的帖子",
    "description": "<p>我评论的帖子</p>",
    "group": "PC端_个人中心",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": {\n       \"list\": [],\n       \"total\": 3,\n       \"pageSize\": \"10\",\n       \"currPage\": \"3\"\n   },\n   \"code\": 200,\n   \"success\": true,\n   \"message\": \"请求成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333:/index/my/commentList"
      }
    ],
    "version": "1.0.0",
    "filename": "src/index/index.js",
    "groupTitle": "PC端_个人中心",
    "name": "GetIndexMyCommentlist"
  },
  {
    "type": "get",
    "url": "/index/my/postlist",
    "title": "我发布的帖子",
    "description": "<p>我发布的帖子</p>",
    "group": "PC端_个人中心",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>条数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "currPage",
            "description": "<p>当前页</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": {\n       \"list\": [],\n       \"total\": 3,\n       \"pageSize\": \"10\",\n       \"currPage\": \"3\"\n   },\n   \"code\": 200,\n   \"success\": true,\n   \"message\": \"请求成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/index/my/postlist"
      }
    ],
    "version": "1.0.0",
    "filename": "src/index/index.js",
    "groupTitle": "PC端_个人中心",
    "name": "GetIndexMyPostlist"
  },
  {
    "type": "get",
    "url": "/index/my/praiseList",
    "title": "我的点赞",
    "description": "<p>我的点赞</p>",
    "group": "PC端_个人中心",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": {\n       \"list\": [],\n       \"total\": 3,\n       \"pageSize\": \"10\",\n       \"currPage\": \"3\"\n   },\n   \"code\": 200,\n   \"success\": true,\n   \"message\": \"请求成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333:/index/my/praiseList"
      }
    ],
    "version": "1.0.0",
    "filename": "src/index/index.js",
    "groupTitle": "PC端_个人中心",
    "name": "GetIndexMyPraiselist"
  },
  {
    "type": "get",
    "url": "/index/received/commentList",
    "title": "我收到的评论",
    "description": "<p>我收到的评论</p>",
    "group": "PC端_个人中心",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": {\n       \"list\": [],\n       \"total\": 3,\n       \"pageSize\": \"10\",\n       \"currPage\": \"3\"\n   },\n   \"code\": 200,\n   \"success\": true,\n   \"message\": \"请求成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333:/index/received/commentList"
      }
    ],
    "version": "1.0.0",
    "filename": "src/index/index.js",
    "groupTitle": "PC端_个人中心",
    "name": "GetIndexReceivedCommentlist"
  },
  {
    "type": "get",
    "url": "/index/post/commentList",
    "title": "帖子评论列表",
    "description": "<p>帖子评论列表</p>",
    "group": "PC端_帖子",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>帖子id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": {\n       \"list\": [],\n       \"total\": 3,\n       \"pageSize\": \"10\",\n       \"currPage\": \"3\"\n   },\n   \"code\": 200,\n   \"success\": true,\n   \"message\": \"请求成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333:/index/post/commentList"
      }
    ],
    "version": "1.0.0",
    "filename": "src/index/index.js",
    "groupTitle": "PC端_帖子",
    "name": "GetIndexPostCommentlist"
  },
  {
    "type": "get",
    "url": "/index/post/info",
    "title": "帖子详情",
    "description": "<p>帖子详情</p>",
    "group": "PC端_帖子",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "myId",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>帖子id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": {\n       \"list\": [],\n       \"total\": 3,\n       \"pageSize\": \"10\",\n       \"currPage\": \"3\"\n   },\n   \"code\": 200,\n   \"success\": true,\n   \"message\": \"请求成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/index/post/info"
      }
    ],
    "version": "1.0.0",
    "filename": "src/index/index.js",
    "groupTitle": "PC端_帖子",
    "name": "GetIndexPostInfo"
  },
  {
    "type": "get",
    "url": "/index/postListPage",
    "title": "帖子分页查询",
    "description": "<p>分页查询</p>",
    "group": "PC端_帖子",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "pageSize",
            "description": "<p>条数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "currPage",
            "description": "<p>当前页</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": {\n       \"list\": [],\n       \"total\": 3,\n       \"pageSize\": \"10\",\n       \"currPage\": \"3\"\n   },\n   \"code\": 200,\n   \"success\": true,\n   \"message\": \"请求成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/index/postListPage"
      }
    ],
    "version": "1.0.0",
    "filename": "src/index/index.js",
    "groupTitle": "PC端_帖子",
    "name": "GetIndexPostlistpage"
  },
  {
    "type": "post",
    "url": "/index/post/collect",
    "title": "帖子收藏",
    "description": "<p>帖子收藏</p>",
    "group": "PC端_帖子",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>帖子id</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "collectType",
            "description": "<p>操作类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "myId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userId",
            "description": "<p>发布者id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": {\n       \"list\": [],\n       \"total\": 3,\n       \"pageSize\": \"10\",\n       \"currPage\": \"3\"\n   },\n   \"code\": 200,\n   \"success\": true,\n   \"message\": \"请求成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/index/post/collect"
      }
    ],
    "version": "1.0.0",
    "filename": "src/index/index.js",
    "groupTitle": "PC端_帖子",
    "name": "PostIndexPostCollect"
  },
  {
    "type": "post",
    "url": "/index/post/comment",
    "title": "帖子评论",
    "description": "<p>帖子评论</p>",
    "group": "PC端_帖子",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>帖子id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "context",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "replyUserId",
            "description": "<p>被回复者id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "myId",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": {\n       \"list\": [],\n       \"total\": 3,\n       \"pageSize\": \"10\",\n       \"currPage\": \"3\"\n   },\n   \"code\": 200,\n   \"success\": true,\n   \"message\": \"请求成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/index/post/comment"
      }
    ],
    "version": "1.0.0",
    "filename": "src/index/index.js",
    "groupTitle": "PC端_帖子",
    "name": "PostIndexPostComment"
  },
  {
    "type": "post",
    "url": "/index/post/praises",
    "title": "帖子点赞",
    "description": "<p>帖子点赞</p>",
    "group": "PC端_帖子",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>帖子id</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "praiseType",
            "description": "<p>操作类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "myId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "userId",
            "description": "<p>发布者id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": {\n       \"list\": [],\n       \"total\": 3,\n       \"pageSize\": \"10\",\n       \"currPage\": \"3\"\n   },\n   \"code\": 200,\n   \"success\": true,\n   \"message\": \"请求成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/index/post/praises"
      }
    ],
    "version": "1.0.0",
    "filename": "src/index/index.js",
    "groupTitle": "PC端_帖子",
    "name": "PostIndexPostPraises"
  },
  {
    "type": "post",
    "url": "/index/register",
    "title": "用户注册",
    "description": "<p>用户注册</p>",
    "group": "PC端_用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "passwords",
            "description": "<p>确定密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   code: 200\n   data: {}\n   message: \"注册成功\"\n   success: true\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/index/login"
      }
    ],
    "version": "1.0.0",
    "filename": "src/index/index.js",
    "groupTitle": "PC端_用户",
    "name": "PostIndexRegister"
  },
  {
    "type": "get",
    "url": "/index/captcha",
    "title": "验证码",
    "description": "<p>验证码</p>",
    "name": "captcha",
    "group": "PC端_用户",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"src\": \"<svg></svg>\",\n        \"unicode\": 86726780\n    },\n    \"code\": 200,\n    \"success\": true,\n    \"message\": \"请求成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/index/captcha"
      }
    ],
    "version": "1.0.0",
    "filename": "src/index/index.js",
    "groupTitle": "PC端_用户"
  },
  {
    "type": "post",
    "url": "/index/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "submit-login",
    "group": "PC端_用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":{\"id\":1,\"username\":\"157170024\",\"nickname\":\"不知道s\",\"figure_url\":\"\\\\uploads\\\\user\\\\20201233\\\\4837cc15de1c6a0e8fda84feb7417f71.jpg\",\"email\":\"703669046@qq.com\",\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE0MDYzNDgzLCJleHAiOjE2MTQwNjUyODN9.BOjUNKhX1y-uXnmv9sesYuWOiYyRi-o738Sc425c_ME\"},\"code\":200,\"success\":true,\"message\":\"请求成功\"}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3333/index/login"
      }
    ],
    "version": "1.0.0",
    "filename": "src/index/index.js",
    "groupTitle": "PC端_用户"
  }
] });
