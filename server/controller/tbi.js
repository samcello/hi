const list = async(ctx, next) => {
	ctx.response.body = {
		result: [
			{
				id: 1,
				name: 'item1'
			},
			{
				id: 2,
				name: 'item2'
			}
		]
	}
}

export default {
	list
}