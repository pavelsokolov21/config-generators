export const prettyJSON = (json: Record<string, unknown>, spaces = 2) =>
	JSON.stringify(json, null, spaces).replace(
		/\n( *)/g,
		(_, p1: string) => '<br />' + '&nbsp'.repeat(p1.length)
	);
