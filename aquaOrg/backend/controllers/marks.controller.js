export const createMarks = async (req, res, next) => {
    try {
        res.status(200).json({ code: "01", result: null })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

export const getAllMarks = async (req, res, next) => {
    try {
        res.status(200).json({ code: "01", result: null })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

export const getMarksAccordingToUserId = async (req, res, next) => {
    try {
        res.status(200).json({ code: "01", result: null })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

export const deleteMarks = async (req, res, next) => {
    try {
        res.status(200).json({ code: "01", result: null })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}