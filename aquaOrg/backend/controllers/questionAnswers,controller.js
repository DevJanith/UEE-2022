export const getAllQuestionAnswers = async (req, res, next) => {
    try {
        res.status(200).json({ code: "01", result: null })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}


export const getQuestionAnswers = async (req, res, next) => {
    try {
        res.status(200).json({ code: "01", result: null })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

export const getQuestionAnswersAccordingToType = async (req, res, next) => {
    try {
        res.status(200).json({ code: "01", result: null })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}