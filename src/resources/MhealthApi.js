import { baseQuery,createApi } from "./RtkqConfig";

import { register,login,forgotPassword,resetPassword } from "./AuthEndPoints";
import { allQuestions, surveyForm, userComment, userResponse } from "./SurveyEndPoint";
import { allUsers, surveys } from "./UserEndPints";
import { addUserInGroup, allGroups, createGroup, deletGroup, removeUserInGroup, updateGroup } from "./GroupEndPoints";
import { addMessage, allMessages } from "./messageEndPoints";


export const MhealthApi = createApi({
    reducerPath:"healthApi",
    baseQuery:baseQuery,
    endpoints:(builder)=>({
        register:builder.mutation({
            query:register,
        }),
        login:builder.mutation({
            query:login
        }),
        reset:builder.mutation({
            query:resetPassword
        }),
        forgot:builder.mutation({
            query:forgotPassword
        }),

        //survey
        newSurvey:builder.mutation({
            query:surveyForm
        }),

        userAnswer:builder.mutation({
            query:userResponse
        }),

        addComment:builder.mutation({
            query:userComment
        }),

        surveyQuestion:builder.query({
            query:allQuestions
        }),

        //user

        getAllUsers:builder.query({
            query:allUsers
        }),
        getAllSurveys:builder.query({
            query:surveys
        }),

        // group

        getGroups:builder.query({
            query:allGroups
        }),
        newGroup:builder.mutation({
            query:createGroup
        }),

        updateGroup:builder.mutation({
            query:updateGroup
        }),
        deleteGroup:builder.mutation({
            query:deletGroup
        }),

        addUserGroup:builder.mutation({
            query:addUserInGroup
        }),
        removeUserGroup:builder.mutation({
            query:removeUserInGroup
        }),
        //message

        allMessage:builder.query({
            query:allMessages
        }),
        writeMessage:builder.mutation({
            query:addMessage
        })

    })
})

export const {
useRegisterMutation,
useLoginMutation,
useResetMutation,
useForgotMutation,
useNewSurveyMutation,
useUserAnswerMutation,
useAddCommentMutation,
useSurveyQuestionQuery,
useGetAllSurveysQuery,
useGetAllUsersQuery,
useGetGroupsQuery,
useNewGroupMutation,
useUpdateGroupMutation,
useDeleteGroupMutation,
useAddUserGroupMutation,
useRemoveUserGroupMutation,
useAllMessageQuery,
useWriteMessageMutation,
}=MhealthApi

