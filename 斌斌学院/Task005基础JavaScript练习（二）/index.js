function queueInit(lists, data) {
    var queueData = new QueueElement(lists, data);
    queueData.init(queueData);
}
var QueueElement = function(lists, data) {
    this.element = this.lists;
    this.data = data;
    this.inputContent = document.getElementById('dataValue');
    this.leftInBtn = document.getElementById('leftInBtn');
    this.rightInBtn = document.getElementById('rightInBtn');
    this.leftOutBtn = document.getElementById('leftOutBtn');
    this.rightOutBtn = document.getElementById('rightOutBtn');
    this.sortBtn = document.getElementById('sortBtn');
    this.lists = document.getElementById('queueData');
    this.dataContent = document.querySelector('.queueData');
}
QueueElement.prototype = {
    init: function(obj) {
        var data = this.data;
        var _this = this;
        var str = "";
        data.forEach(function(value, index) {
            var node = this._createElementItem(value);
            this.element.appendChild('node');
        })
        this.registEvent(obj);
    },
    registEvent: function(obj) {
        this.leftInBtn.addEventListener('click', function() {
            var data = obj.getInputValue(obj.inputContent);
            obj._unshift(obj.dataContent, data, obj.data);
        })
        this.rightInBtn.addEventListener('click', function() {
            var data = obj.getInputValue(obj.inputContent);
            obj._push(obj.dataContent, data, obj.data);
        })
        this.leftOutBtn.addEventListener('click', function() {
            obj._shift(obj.dataContent, obj.data);
        })
        this.rightOutBtn.addEventListener('click', function() {
            obj._pop(obj.dataContent, obj.data);
        })
        this.dataContent.addEventListener('click', function(e) {
            if (e.target && e.target.nodeName.toLowerCase() == 'li') {
                var index;
                var dataList = this.children;
                for (var i = 0; i < dataList.length; i++) {
                    if (dataList[i] == e.target) {
                        index = i;
                        break;
                    }
                }
                if (index >= 0) {
                    // remove array data
                    obj.data.splice(index, 1);
                    // remove html 
                    obj.dataContent.removeChild(e.target);
                    alert('Removed:' + e.target.innerText + "Loc: " + (++index));
                } else {
                    alert("failed!");
                }
            }
        })
        this.sortBtn.addEventListener('click', function() {
            obj.data = obj._bubbleSort(obj.data);
            console.log(obj.data);

            obj.dataContent.innerHTML = '';
            obj.data.forEach(function(value, index) {
                var node = obj._createElementItem(value)
                document.getElementById("queueData").appendChild(node);
            });
        })

    },
    getInputValue: function(element) {
        var data = Number(element.value);
        if (!data) {
            alert('Pls input...')
            return null;
        } else {
            if (data >= 10 && data <= 100) {
                return data;
            } else {
                alert('err range');
            }
        }
    },
    _unshift: function(element, data, queueData) {
        if (data) {
            queueData.unshift(data);
            if (this._judgeLength(queueData)) {
                var node = this._createElementItem(data);
                element.insertBefore(node, document.getElementById('queueData').firstChild);
                return queueData;
            } else {
                alert('>60')
            }
        }
        return queueData;
    },
    _push: function(element, data, queueData) {
        if (data) {
            queueData.push(data);
            if (this._judgeLength(queueData)) {
                var node = this._createElementItem(data);
                element.appendChild(node);
                return queueData;
            } else {
                alert('>60')
            }
        }
        return queueData;
    },
    _shift: function(element, queueData) {
        if (queueData.length <= 0) {
            alert('empty list');
            return queueData;
        } else {
            alert('removed: ' + queueData[0]);
            queueData.shift();
            element.removeChild(element.children[0]);
            return queueData;
        }
    },
    _pop: function(element, data_queue) {
        var length = data_queue.length
        if (length <= 0) {
            alert('列表已空，移除失败');
            console.error('列表已空，移除失败');
            return data_queue;
        } else {
            console.log(data_queue)
            alert('移除的元素内数值为: ' + data_queue[length - 1]);
            data_queue.pop();
            element.removeChild(element.children[length - 1]);
            return data_queue;
        }
    },
    _judgeLength: function(data_queue) {
        if (data_queue.length > 60) {
            return false
        } else {
            return true;
        }
    },
    _createElementItem: function(data) {
        var node = document.createElement("li");
        node.innerText = data;
        node.setAttribute("data-num", data);
        node.style.height = data + 'px';
        return node;
    },
    _bubbleSort: function(arr) {
        var flag = true; //设置标志位
        var nums = arr.length;
        for (var i = nums; i >= 2 && flag; i--) {
            flag = false; //如果一次交换能都没有过，则说明冒泡排序已结束
            for (var j = 0; j < i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    flag = true;
                    this.swap(arr, j, j + 1);
                }
            }
        }
        return arr;
    },
    swap: function(arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
}

window.onload = function() {
    var lists = document.getElementById('queueData');
    var data = [];
    queueInit(lists, data);
}