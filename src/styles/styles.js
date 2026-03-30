import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#000",
    },

    title: {
        fontSize: 22,
        textAlign: "center",
        marginBottom: 20,
        color: "#fff"
    },

    addButton: {
        backgroundColor: "#4CAF50",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20,
    },

    addButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    },

    card: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        alignItems: "center",
        elevation: 2,
        shadowColor: "#000",
    },

    infoContainer: {
        flex: 1,
    },

    name: {
        fontSize: 16,
        fontWeight: "bold",
    },

    email: {
        fontSize: 13,
        color: "#666",
        marginTop: 2
    },

    actionButtons: {
        flexDirection: "row",
        gap: 8,
    },

    btnEdit: {
        backgroundColor: "#2196F3",
        padding: 8,
        borderRadius: 5,
        minWidth: 60,
        alignItems: "center"
    },

    btnDelete: {
        backgroundColor: "#F44336", // Vermelho (Exclusão)
        padding: 8,
        borderRadius: 5,
        minWidth: 60,
        alignItems: "center"
    },

    btnText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold"
    }, 

    input: {
        backgroundColor: "#fff",
        height: 50,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: "#333"
    },

    btnSave: {
        backgroundColor: "#4CAF50",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },

    btnCancel: {
        backgroundColor: "#6c757d",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    }
});