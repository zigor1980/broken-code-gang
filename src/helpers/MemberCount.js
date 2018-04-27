function MemberCount(count) {
    if ((count > 10) && (count < 15)) {
        return 'пользователей';
    }
    const caseCount = count % 10;
    if (caseCount === 1) {
        return 'пользователь';
    } else if ((caseCount > 1) && (caseCount < 5)) {
        return 'пользователя';
    }
    return 'пользователей';
}

export default MemberCount;
