export enum CommandModules {
	None = 0,
	Utility = 1,
	Moderation = 1 << 1,
	Tags = 1 << 2,
	GitHub = 1 << 3,
	All = Utility | Moderation | Tags | GitHub,
}

export const EMBED_TITLE_LIMIT = 256;
export const EMBED_DESCRIPTION_LIMIT = 2048;
export const EMBED_FOOTER_TEXT_LIMIT = 2048;
export const EMBED_AUTHOR_NAME_LIMIT = 256;
export const EMBED_FIELD_LIMIT = 25;
export const EMBED_FIELD_NAME_LIMIT = 256;
export const EMBED_FIELD_VALUE_LIMIT = 1024;
export const MESSAGE_CONTENT_LIMIT = 2000;
export const GITHUB_BASE_URL = 'https://api.github.com/graphql';
export const GITHUB_ICON_PR_OPEN = 'https://cdn.discordapp.com/emojis/759112631508008960.png';
export const GITHUB_ICON_PR_CLOSED = 'https://cdn.discordapp.com/emojis/759110235574370305.png';
export const GITHUB_ICON_PR_MERGED = 'https://cdn.discordapp.com/emojis/759113184509558884.png';
export const GITHUB_ICON_PR_DRAFT = 'https://cdn.discordapp.com/emojis/759111607711563797.png';
export const GITHUB_ICON_ISSUE_OPEN = 'https://cdn.discordapp.com/emojis/759114372491902976.png';
export const GITHUB_ICON_ISSUE_CLOSED = 'https://cdn.discordapp.com/emojis/759114382101184532.png';
export const GITHUB_ICON_COMMIT = 'https://cdn.discordapp.com/emojis/759112647383056384.png';
export const GITHUB_COLOR_OPEN = 4491332;
export const GITHUB_COLOR_CLOSED = 14166056;
export const GITHUB_COLOR_MERGED = 7559322;
export const GITHUB_COLOR_DRAFT = 13421772;
export const GITHUB_COLOR_COMMIT = 1668818;
