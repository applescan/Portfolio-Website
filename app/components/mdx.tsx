// @ts-nocheck
import * as React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
	a: ({ children, ...props }) => {
		const external = typeof props.href === "string" && props.href.startsWith("http");
		return (
			<a {...props} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
				{children}
			</a>
		);
	},
	img: ({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
		<img alt={alt ?? ""} loading="lazy" {...props} />
	),
	video: (props: React.VideoHTMLAttributes<HTMLVideoElement>) => (
		<video controls playsInline preload="metadata" {...props} />
	),
};

export function Mdx({ code }: { code: string }) {
	const Component = useMDXComponent(code);
	return <Component components={components} />;
}
