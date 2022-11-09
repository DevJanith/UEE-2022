export const login = async (req, res, next) => {
    try {
        res.status(200).json({ code: "01", result: null })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

export const register = async (req, res, next) => {
    try {
        res.status(200).json({ code: "01", result: null })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

export const resetPassword = async (req, res, next) => {
    try {
        res.status(200).json({ code: "01", result: null })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

export const getUser = async (req, res, next) => {
    try {
        res.status(200).json({ code: "01", result: null })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

export const updateUser = async (req, res, next) => {
    try {
        res.status(200).json({ code: "01", result: null })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
} 