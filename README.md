# Google Map Proxy (测试版)

> 使用 `Vercel` 部署的`Google Map`代理

# 示例



![](/api/map?x=0&y=0&z=0)

> x=0 y=0 z=0 的瓦片

# 使用方法

复制以下`瓦片地址`,在QGIS中新建`XYZ Tiles`，填入url，其他默认即可
```
https://qgismaps.vercel.app/api/map?x={x}&y={y}&z={z}
```

# 说明

 - 仅供个人研究使用
 - 只做了`satellite only`图层代理，其他图层均有偏移
 - `Vercel`访问速度跟所处区域和网络均有关
 - 你可以fork我的仓库[liuxsdev/gmaps](https://github.com/liuxsdev/gmaps),自己部署自己使用

<a href="https://vercel.com/" target="_blank"><img src="./vercel-logotype-dark.svg" width="100px"></a>