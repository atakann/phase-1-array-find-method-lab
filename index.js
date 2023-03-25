// code your solution here
function superbowlWin(record){
    const win = record.find(win => win.result === "W")
    return win ? win.year : undefined;
}