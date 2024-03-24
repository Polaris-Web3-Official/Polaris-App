const buttonStyle = {
    btnContainer : {
        justifyContent: "center",
        alignItems: 'center',
        margin: 'auto',
    },

    btnChildren: {
        borderWidth: 1,
        borderColor: 'rgb(155,155,155)',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 100,
        minHeight: 30,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'rgb(30,30,30)',
    },

    btn: {
        color: "rgb(240,240,240)",
        letterSpacing: 1,
        fontSize: 12,
    }
}

export default function ButtonStyle() {
  return buttonStyle
}