import { UtilsHelper } from './../../app/helpers/utilsHelper';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'orderBy',
})

export class OrderByPipe implements PipeTransform {
    transform(value: Array<any>, args: string) {
        let _ret = [];
        let _args = args.replace('-', '');

        if (args.indexOf('-') > -1) {
            _ret = (<Array<any>>UtilsHelper.data.sorting(value, _args)).reverse();
        } else {
            _ret = <Array<any>>UtilsHelper.data.sorting(value, args);
        }
        return _ret;
    }
}