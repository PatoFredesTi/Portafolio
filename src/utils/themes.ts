

export interface ThemeStructure {
    backgroundColor: string;
    backgroundColorNav: string;
    backgroundColorCard: string;
    textColor: string;
    textParraph: string;
    colorIcon: string;

}

export const themes: Record<"light" | "dark", ThemeStructure> = {
    dark: {
        backgroundColor: '#171C28',
        backgroundColorNav: '#171C28',
        backgroundColorCard: '#f4f4f4',
        textColor: '#fff',
        textParraph: '#fff',
        colorIcon: '#fff'

    },
    light: {
        backgroundColor: '#fff',
        backgroundColorNav: '#fff',
        backgroundColorCard: '#f4f4f4',
        textColor: '#171C28',
        textParraph: '#171C28',
        colorIcon: '#171C28'

    }
};
