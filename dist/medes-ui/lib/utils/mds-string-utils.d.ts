export declare class MdsStringUtils {
    static lowerCase: (str: string) => string;
    static upperCase: (str: string) => string;
    static titleCase: (str: string) => string;
    static pascalCase: (str: string) => string;
    static randomCharacter: (length: number, characters?: string) => string;
    static convertToSlug: (text: string) => string;
    static getYoutubeID: (url: string) => string;
    static getYoutubeEmbed: (url: string) => string;
    static getYoutubeThumbnail: (url: string, size?: string) => string;
}
