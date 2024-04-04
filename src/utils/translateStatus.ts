const translateStatus = (status: string): { __html: string } => {
    switch (status) {
        case 'created':
            return { __html: 'создан' };
        case 'pending':
            return { __html: 'готовится' };
        case 'done':
            return { __html: '<span style="color: #00CCCC">выполнен</div>' };
        default:
            return { __html: status };
    }
}

export default translateStatus;
