var localStorage = {
    startNode: 1
}

export function getSave(data) {
    var returnData = 'undefined';
    
    switch (data) {
        case 'startNode': returnData = localStorage.startNode;
    }

    return returnData;
}

export function setSave(data, newdata) {
    var save = null;
    
    switch (data) {
        case 'startNode': localStorage.startNode = newdata;
    }
}