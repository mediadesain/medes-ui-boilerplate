// @dynamic
export class MdsArrayUtils {
}
MdsArrayUtils.countUniqueValues = (data) => {
    const count = {};
    data.forEach((i) => {
        count[i] = (count[i] || 0) + 1;
    });
    return count;
};
MdsArrayUtils.filterMultiple = (data, key, filterdata) => {
    // console.log('FilterMultiple', data, key, filterdata)
    filterdata = filterdata.join().toLocaleLowerCase().split(',');
    const newdata = [];
    data.filter((item) => {
        if (item[key]) {
            item[key] = item[key].includes(',') ? item[key].split(',') : item[key];
            const isArray = Array.isArray(item[key]);
            // If values of key is string
            if (!isArray) {
                if (filterdata.indexOf(item[key].toLocaleLowerCase()) !== -1) {
                    newdata.push(item);
                }
            }
            // If values of key is Array
            if (isArray) {
                item[key].forEach((val) => {
                    if (filterdata.indexOf(val.toLocaleLowerCase()) !== -1) {
                        newdata.push(item);
                    }
                });
            }
        }
    });
    return [...new Set(newdata)];
};
MdsArrayUtils.groupValues = (arr, key) => {
    const keyvalue = (a) => a[key];
    return arr.reduce((r, v, i, a, k = keyvalue(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
};
MdsArrayUtils.sumValues = (arr) => {
    return arr.reduce((total, num) => total + num);
};
MdsArrayUtils.arrayTolistObject = (arr, objectkey) => {
    const groupObj = {};
    for (const item of arr) {
        const newobj = {};
        newobj[item[objectkey]] = item;
        Object.assign(groupObj, newobj);
    }
    return groupObj;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRzLWFycmF5LXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWVkZXMtdWkvc3JjL2xpYi91dGlscy9tZHMtYXJyYXktdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztBQUNYLE1BQU0sT0FBTyxhQUFhOztBQUNmLCtCQUFpQixHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUU7SUFDckMsTUFBTSxLQUFLLEdBQVEsRUFBRSxDQUFDO0lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUNwQixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQyxDQUFBO0FBQ00sNEJBQWMsR0FBRyxDQUFDLElBQVcsRUFBRSxHQUFXLEVBQUUsVUFBaUIsRUFBRSxFQUFFO0lBQ3BFLHVEQUF1RDtJQUN2RCxVQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlELE1BQU0sT0FBTyxHQUFRLEVBQUUsQ0FBQztJQUN4QixJQUFJLENBQUMsTUFBTSxDQUFFLENBQUMsSUFBUyxFQUFFLEVBQUU7UUFDdkIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUM7WUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekMsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxPQUFPLEVBQUM7Z0JBQ1QsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQzFELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3RCO2FBQ0o7WUFDRCw0QkFBNEI7WUFDNUIsSUFBSSxPQUFPLEVBQUM7Z0JBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxDQUFDLEdBQVcsRUFBRSxFQUFFO29CQUMvQixJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTt3QkFDcEQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDdEI7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDTjtTQUNKO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQTtBQUNNLHlCQUFXLEdBQUcsQ0FBQyxHQUFVLEVBQUUsR0FBVyxFQUFFLEVBQUU7SUFDN0MsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFNLEVBQUUsQ0FBTSxFQUFFLENBQU0sRUFBRSxDQUFNLEVBQUUsSUFBUyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeEgsQ0FBQyxDQUFBO0FBQ00sdUJBQVMsR0FBRyxDQUFDLEdBQVEsRUFBRSxFQUFFO0lBQzVCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDLEtBQVUsRUFBRSxHQUFRLEVBQUUsRUFBRSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUUsQ0FBQztBQUMvRCxDQUFDLENBQUE7QUFDTSwrQkFBaUIsR0FBRyxDQUFDLEdBQVEsRUFBRSxTQUFpQixFQUFFLEVBQUU7SUFDdkQsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLEtBQUssTUFBTSxJQUFJLElBQUksR0FBRyxFQUFDO1FBQ25CLE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ25DO0lBQ0QsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGR5bmFtaWNcbmV4cG9ydCBjbGFzcyBNZHNBcnJheVV0aWxzIHtcbiAgICBzdGF0aWMgY291bnRVbmlxdWVWYWx1ZXMgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50OiBhbnkgPSB7fTtcbiAgICAgICAgZGF0YS5mb3JFYWNoKChpOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvdW50W2ldID0gKGNvdW50W2ldIHx8IDApICsgMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG4gICAgc3RhdGljIGZpbHRlck11bHRpcGxlID0gKGRhdGE6IGFueVtdLCBrZXk6IHN0cmluZywgZmlsdGVyZGF0YTogYW55W10pID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0ZpbHRlck11bHRpcGxlJywgZGF0YSwga2V5LCBmaWx0ZXJkYXRhKVxuICAgICAgICBmaWx0ZXJkYXRhID0gZmlsdGVyZGF0YS5qb2luKCkudG9Mb2NhbGVMb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgICAgICBjb25zdCBuZXdkYXRhOiBhbnkgPSBbXTtcbiAgICAgICAgZGF0YS5maWx0ZXIoIChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtW2tleV0pe1xuICAgICAgICAgICAgICAgIGl0ZW1ba2V5XSA9IGl0ZW1ba2V5XS5pbmNsdWRlcygnLCcpID8gaXRlbVtrZXldLnNwbGl0KCcsJykgOiBpdGVtW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoaXRlbVtrZXldKTtcbiAgICAgICAgICAgICAgICAvLyBJZiB2YWx1ZXMgb2Yga2V5IGlzIHN0cmluZ1xuICAgICAgICAgICAgICAgIGlmICghaXNBcnJheSl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJkYXRhLmluZGV4T2YoaXRlbVtrZXldLnRvTG9jYWxlTG93ZXJDYXNlKCkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3ZGF0YS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIHZhbHVlcyBvZiBrZXkgaXMgQXJyYXlcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheSl7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1ba2V5XS5mb3JFYWNoKCAodmFsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJkYXRhLmluZGV4T2YodmFsLnRvTG9jYWxlTG93ZXJDYXNlKCkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld2RhdGEucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFsuLi5uZXcgU2V0KG5ld2RhdGEpXTtcbiAgICB9XG4gICAgc3RhdGljIGdyb3VwVmFsdWVzID0gKGFycjogYW55W10sIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleXZhbHVlID0gKGE6IGFueSkgPT4gYVtrZXldO1xuICAgICAgICByZXR1cm4gYXJyLnJlZHVjZSgocjogYW55LCB2OiBhbnksIGk6IGFueSwgYTogYW55LCBrOiBhbnkgPSBrZXl2YWx1ZSh2KSkgPT4gKChyW2tdIHx8IChyW2tdID0gW10pKS5wdXNoKHYpLCByKSwge30pO1xuICAgIH1cbiAgICBzdGF0aWMgc3VtVmFsdWVzID0gKGFycjogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBhcnIucmVkdWNlKCAodG90YWw6IGFueSwgbnVtOiBhbnkpID0+IHRvdGFsICsgbnVtICk7XG4gICAgfVxuICAgIHN0YXRpYyBhcnJheVRvbGlzdE9iamVjdCA9IChhcnI6IGFueSwgb2JqZWN0a2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBPYmogPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFycil7XG4gICAgICAgICAgICBjb25zdCBuZXdvYmo6IGFueSA9IHt9O1xuICAgICAgICAgICAgbmV3b2JqW2l0ZW1bb2JqZWN0a2V5XV0gPSBpdGVtO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihncm91cE9iaiwgbmV3b2JqKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3JvdXBPYmo7XG4gICAgfVxufVxuIl19