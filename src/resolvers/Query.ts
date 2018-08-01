import { Context } from '../utils/getContext';

export const Query = {
	async characters(_, args, ctx: Context, info) {
		return await ctx.charactersModel.getMany(
			args.where,
			args.orderBy,
			args.limit,
			args.offset
		);
	},
	async getCharacter(_, args, ctx: Context, info) {
		return await ctx.charactersModel.getOne(args.where);
	},
	async comics(_, args, ctx: Context, info) {
		return await ctx.comicsModel.getMany(
			args.where,
			args.orderBy,
			args.limit,
			args.offset
		);
	},
	async getComic(_, args, ctx: Context, info) {
		return await ctx.comicsModel.getOne(args.where);
	},
	async creators(_, args, ctx: Context, info) {
		return await ctx.creatorsModel.getMany(
			args.where,
			args.orderBy,
			args.limit,
			args.offset
		);
	},
	async getCreator(_, args, ctx: Context, info) {
		return await ctx.creatorsModel.getOne(args.where);
	},
	async events(_, args, ctx: Context, info) {
		return await ctx.eventsModel.getMany(
			args.where,
			args.orderBy,
			args.limit,
			args.offset
		);
	},
	async getEvent(_, args, ctx: Context, info) {
		return await ctx.eventsModel.getOne(args.where);
	},
	async series(_, args, ctx: Context, info) {
		return await ctx.seriesModel.getMany(
			args.where,
			args.orderBy,
			args.limit,
			args.offset
		);
	},
	async getSeries(_, args, ctx: Context, info) {
		return await ctx.seriesModel.getOne(args.where);
	},
	async stories(_, args, ctx: Context, info) {
		return await ctx.storiesModel.getMany(
			args.where,
			args.orderBy,
			args.limit,
			args.offset
		);
	},
	async getStory(_, args, ctx: Context, info) {
		return await ctx.storiesModel.getOne(args.where);
	},
	user(_, args, ctx: Context, info) {
		return ctx.db.query.user(args, info);
	},
	users(_, args, ctx: Context, info) {
		return ctx.db.query.users(args, info);
	},
	favorite(_, args, ctx: Context, info) {
		return ctx.db.query.favorite(args, info);
	},
	favorites(_, args, ctx: Context, info) {
		return ctx.db.query.favorites(args, info);
	}
	// me(parent, args, ctx: Context, info) {
	// 	const id = getUserId(ctx);
	// 	return ctx.db.query.user({ where: { id } }, info);
	// }
};
