import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.Colors,
        //background
        backgroundOrange: { backgroundColor: '#F58216' },
        backgroundGray: { backgroundColor: '#CBD5E1' },
        Whitebackground: { backgroundColor: "#FFFFFF" },
        backgroundBlack: { backgroundColor: '#000' },
        backgroundGrayW: { backgroundColor: 'F5F5F5' },
        backgroundRed: {backgroundColor: '#F32424'},    
        //colors
        WhiteColor: { color: '#FFF' },
        ColorGray: { color: '#CBD5E1' },
        ColorOrange: { color: '#F58216' },
        OrangeEdge: { borderColor: '#F58216' }
    },
    styles: {
        //upercase
        uper: {textTransform: 'uppercase'},
        //bordes
        Edge: { borderWidth: 2 },
        //font
        bold: { fontWeight: 'bold' },
        //size font
        f15: { fontSize: 15 },
        f16: { fontSize: 16 },
        f17: { fontSize: 17 },
        f18: { fontSize: 18 },
        f20: { fontSize: 20 },
        f30: { fontSize: 30 },
        f40: { fontSize: 40 },
        //align
        alignCenter: { alignItems: 'center' },
        alignEnd: { alignItems: 'flex-end' },
        alignBetwen: { alignItems: 'flex-betwen' },
        //justify
        justifyCenter: { justifyContent: 'center' },
        //flex
        flex1: { flex: 1 },
        flexrow: { flexDirection: 'row' },
        flexColumn: { flexDirection: 'column' },
        //margin
        m5: { margin: 5 },
        m10: { margin: 10 },
        m15: { margin: 15 },
        m20: { margin: 20 },
        m25: { margin: 25 },
        m30: { margin: 30 },
        //marginBottom
        mb10: { marginBottom: 10 },
        mb15: { marginBottom: 15 },
        mb20: { marginBottom: 20 },
        mb25: { marginBottom: 25 },
        mb30: { marginBottom: 30 },
        mb35: { marginBottom: 35 },
        //margin top
        mt5: { marginTop: 5 },
        mt10: { marginTop: 10 },
        mt15: { marginTop: 15 },
        mt20: { marginTop: 20 },
        mt25: { marginTop: 25 },
        mt30: { marginTop: 30 },
        //margin Vertical
        mv10: { marginVertical: 10 },
        mv15: { marginVertical: 15 },
        mv20: { marginVertical: 20 },
        mv30: { marginVertical: 30 },
        //margin horizontal
        mh10: { marginHorizontal: 10 },
        mh15: { marginHorizontal: 15 },
        mh20: { marginHorizontal: 20 },
        mh25: { marginHorizontal: 25 },
        mh30: { marginHorizontal: 30 },
        //paddingtop
        pt10: { padding: 10 },
        pt30: { paddingTop: 30 },
        pt50: { paddingTop: 50 },
        pt80: { paddingTop: 80 },
        //padding
        padding15: { padding: 15 },
        p10: { padding: 10 },
        p15: { padding: 15 },
        p20: { padding: 20 },
        p25: { padding: 25 },
        p30: { padding: 30 },
        //paddingVertical
        pv10: {paddingVertical: 10},
        pv20: {paddingVertical: 20},
        pv30: {paddingVertical: 30},
        pv40: {paddingVertical: 40},
        pv50: {paddingVertical: 50},
        //paddingBottom
        pb10: {paddingBottom: 10},
        pb20: {paddingBottom: 20},
        pb30: {paddingBottom: 30},
        pb40: {paddingBottom: 40},
        pb50: {paddingBottom: 50},
        pb60: {paddingBottom: 60},
        //borde
        redondo5: { borderRadius: 5 },
        redondo10: { borderRadius: 10 },
        redondo15: { borderRadius: 15 },
        redondo20: { borderRadius: 20 },
        //width
        w50: { width: 50 },
        w80: { width: 80 },
        w100: { width: 100 },
        w150: { width: 150 },
        w180: { width: 180 },
        w200: { width: 200 },
        w250: { width: 250 },
        w300: { width: 300 },
        w350: { width: 350 },
        w400: { width: 400 },

        //height
        h50: { height: 50 },
        h100: { height: 100 },
        h150: { height: 150 },
        h180: { height: 180 },
        h200: { height: 200 },
        h250: { height: 250 },
        h300: { height: 300 },
        h350: { height: 350 },
        h400: { height: 400 }


    }

}
export default Theme