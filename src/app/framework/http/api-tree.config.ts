/**
 * api tree config
 * _this可以省略不写，但是不写的话，在ts就没有语法提示
 * 子节点getByName,getByAge以及_this可以为任意值，因为将会被apiTreeGenerator重新赋值
 */
const APITREECONFIG = {
  api: {
    v1: {
      user: {
        getByName: "",
        getByAge: "",
        _this: ""
      }
    },
    _this: ""
  }
};

export { APITREECONFIG };
