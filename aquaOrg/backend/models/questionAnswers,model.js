import mongoose from "mongoose"

const questionAnswerSchema = mongoose.Schema({
    qaCollection: [
        {
            question: {
                type: String,
                required: true
            },
            answer: {
                type: String,
                required: true
            }
        }
    ],
    qaCollectionType: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "1"
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
})

const QuestionAnswers = mongoose.model('QuestionAnswers', questionAnswerSchema)

export default QuestionAnswers;