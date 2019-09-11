import { APITREECONFIG } from "./api-tree.config";
import { environment } from "../../../environments/environment";

const APITREE = APITREECONFIG;

/**
 * 为api node chain 组装api
 */
const assemblyApi = (apiNodeChain: string) => {
  return apiNodeChain ? `/${apiNodeChain.replace(/^\//, "")}` : environment.httpBaseUri;
};

// const assemblyApi = (apiNodeChain: string) => {
//   return apiNodeChain ? `${environment.httpBaseUri}/${apiNodeChain.replace(/^\//, "")}` : environment.httpBaseUri;
// };
/**
 * 根据api tree config 生成 api tree：
 *     为每个api apiNode(api节点)添加host以及所有parentApiNode(父节点)的前缀
 * 举个例子：
 *     以下api tree config中，api节点有v1和user，其中v1是user的父节点
 *     const apiTreeConfig = {
 *       v1: {
 *         user: ''
 *       }
 *     }
 *     ==>
 *     (假设HOST_URL=http://xxx.xxx.xxx.xxx)
 *     const apiTree = {
 *       _this: 'http://xxx.xxx.xxx.xxx',
 *       v1: {
 *         _this: 'http://xxx.xxx.xxx.xxx/v1',
 *         user: 'http://xxx.xxx.xxx.xxx/v1/user'
 *       }
 *     }
 * @param apiTreeConfig api tree config
 * @param parentApiNodeChain parentApiNode1/parentApiNode2/parentApiNode3
 */
const apiTreeGenerator = (apiTreeConfig: string | object, parentApiNodeChain?: string) => {
  for (const key of Object.keys(apiTreeConfig)) {
    const apiNode = key;
    const prefixChain = parentApiNodeChain ? `${parentApiNodeChain}/` : "";
    if (Object.prototype.toString.call(apiTreeConfig[key]) === "[object Object]") {
      apiTreeGenerator(apiTreeConfig[key], prefixChain + apiNode);
    } else {
      apiTreeConfig[key] = parentApiNodeChain ? assemblyApi(prefixChain + key) : assemblyApi(key);
    }
  }
  // 创建_this节点 (这里需要放在上面的for之后)
  apiTreeConfig["_this"] = parentApiNodeChain ? assemblyApi(`${parentApiNodeChain}`) : assemblyApi("");
};

apiTreeGenerator(APITREECONFIG);

// 导出配置好的url
export { APITREE };
