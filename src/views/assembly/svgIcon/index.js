import { Alert, Descriptions } from "antd";
import IconSvg from "@/components/IconSvg";

const svgIcon = () => {
	return (
		<div className="card content-box">
			<Alert
				message="SVG 图标目前通过使用 svg-sprite-loader 和 svgo-loader 处理 SVG 图标，并将它们作为 SVG Sprite 使用。这种方式有助于减少网络请求和优化 SVG 图标的加载性能，文档请查看 ：【svg-sprite-loader】https://www.npmjs.com/package/svg-sprite-loader 和 【svgo-loader】https://www.npmjs.com/package/svgo-loader"
				style={{ width: "100%" }}
				type="warning"
			/>
			<br />
			<div className="icon-list">
				<IconSvg name="apple" />
				<IconSvg name="banana" />
				<IconSvg name="grape" />
			</div>
			<Descriptions title="配置项 📚" bordered className="antd-descriptions" column={1}>
				<Descriptions.Item label="name">图标的名称，svg 图标必须存储在 src/assets/svg 目录下</Descriptions.Item>
				<Descriptions.Item label="prefix">图标的前缀，默认为icon</Descriptions.Item>
				<Descriptions.Item label="iconStyle"> 图标的样式，默认样式为 {"{ width: 1.5em, height: 1.5em }"} </Descriptions.Item>
			</Descriptions>
		</div>
	);
};

export default svgIcon;
