export const notificationTrigger = (isSuccess,category,customMessage) => {
    return {
        type:'NOTIFICATION_TRIGGER',
        payload:{isSuccess,category,customMessage}
    }
}

export const notificationOff = () => {
    return {
        type:'NOTIFICATION_OFF'
    }
}
