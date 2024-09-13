var localStorage_json = {
    startNode: 1,
    savecode: 1
};

export function getSave(data) {
    var returnData = 'undefined';
    
    switch (data) {
        case 'startNode':
            returnData = localStorage_json.startNode;
            if (returnData == null)
                returnData = localStorage.getItem('startNode');
        case 'savecode':
            returnData = localStorage_json.savecode;
            if (returnData == null)
                returnData = 1;
    }

    if (returnData == null)
        returnData = 'undefined';

    return returnData;
}

export function setSave(data, newdata) {
    switch (data) {
        case 'startNode':
            localStorage_json.startNode = newdata;
            localStorage.setItem('startNode', newdata);
    }
}

export function getAll() {
    setSave('startNode', (localStorage.getItem('startNode') != null) ? localStorage.getItem('startNode') : 1);
}