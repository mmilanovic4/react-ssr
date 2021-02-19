export const html = ({ htmlAttributes, meta, initialData, dom }) => {
	return `
<!DOCTYPE html>
<html ${htmlAttributes}>
	<head>
		${meta}
		<script>
			window.__DATA__ = ${initialData};
		</script>
	</head>
	<body>
		<div id="root">${dom}</div>
	</body>
</html>	
`?.trim();
};
