export function getDateNow() {
    const now = new Date();
    const yyyy = now.getFullYear();
    let mm = now.getMonth() - 1;
    let dd = now.getDate();

    if(dd < 10) dd = "0" + dd;
    if(mm < 10) mm = "0" + mm;

    return dd + "-" + mm + "-" + yyyy;
}