import React from 'react';
import './App.css';
import Headermain from './Headermain';
import BodyWork from './Bodywork';
import UserForm from './UserForm';
import SubmitButton from './SubmitButton';

const Clothes = [{
    item: 1,
    name: 'Shirt',
    price: 32,
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRLmQbYPXQJXiku_CHF6BBZYPNR5iduDeEMLv39lr0OfL5912L0CvrOc-Wd3-Dp4pGk6Qvu-o0ZBhppjqziXgMYBZlZo6UmyoBd-HOYj2zs2FgCrsE8zg5vJw&usqp=CAc'
},
{
    item: 2,
    name: 'Trouser',
    price: 40,
    img: 'data:image/jpeg;base64,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'
},
{
    item: 3,
    name: 'T-shirt',
    price: 20,
    img: 'data:image/jpeg;base64,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'
},
{
    item: 4,
    name: 'Lower',
    price: 80,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYeszKKCILHdI9Huh67HeX6LQ1IXb-Tu8VBr225NhYDHV0gZXkxw'
}
];

const Shoes = [{
    item: 1,
    name: 'Sneakers ',
    price: 22,
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR630QzBQdfkDV_OxAECyhi46M7tnnXuwUu8NCJ5hWHEemMXCfD1QSE2tgbYbDzTiHAdtEm1V9Kv-oHOmDWmn4oceTxmOBZUz1yCnAtgM0_LL4-Qz2lbELvGw&usqp=CAc'
},
{
    item: 2,
    name: 'Loafer',
    price: 20,
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSqgvFVY0Lw_VACSXchxqZP0sze-26eFBBs_6TFWL933LXSHB4y5xrMhazAQzpUk-KRZqmnKc_JCYk36RQdSLQDdgPsOtai6sC3ACVZPw-ilQhkOJBf1t93&usqp=CAc'
},
{
    item: 3,
    name: 'Running Shoes',
    price: 25,
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQh0rUFlGxs-1m1JaDQgq9nXZMd4JaoI3D5jMWJFCSN3pts_v3aSDu7KPNU4vPDNCUqQapKsywvXBw5daOTzV4N2X5oe8vJ1i9R2lwuV5jPQGvX-HpKAWiM&usqp=CAc'
},
{
    item: 4,
    name: 'Vans',
    price: 50,
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhASEhAQFQ8QEBASFRUYFRMWFREQFRYWFxgVFRUaHTQgGBolHRUVITEhJSotLy8uFyAzODMtNygtLisBCgoKDg0OGxAQGy4iICUrNzc3MTctLzYtNy0vLSsvLS0tLS0rLy0tLTcvLTA1LS0vKy4tNS8rNy0uNS0tMTItLf/AABEIAM8A9AMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xABJEAACAgECAwMHBwoDBQkAAAABAgADEQQhBRIxBhNBByIyUWFxsRQjQlKBkdFDU1Rig5KTocHTRHLwMzSChJQVJFVjorLCw9L/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAArEQEAAgIABQMDAwUAAAAAAAAAAQIDEQQSITFBE1HwBSLBYYGhFDJxsdH/2gAMAwEAAhEDEQA/AO4xEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARExuJa5KKrLbDhK1yfb6gPaTgfbOxG51AyYkD7OdqdVbqOa1MaWxjWMDC1OBzKC56kjbGc+7YSdgyeTHOOdSjW0WjcPYiJWkREQEp5hnHjKNXqBWj2N6NaM5/yqCT8Jzrh3lEfmcX6cHl6Ohx5+QpDBugBJGR6jsZbjxWvvlhG14r3dKicr13bq6w8yLXUFBC+dazZ2OGIwCCR05c+0Sc9muOJfVWGtra/l88Kc4bxA80c2MjcAe4RfBkp/dDlb1t2lu4iJUmREQEREBERAREQEREBERAREQEREBERASA+VniYSqqkN57NzkYzt6Kk+GMtn/hk+nHfKPxBbtW9eMikLUANyWBySn6/MSMHY48D108JXeSJ9lWWftV8M1YqSqxNRbptJc57ypN3Fijd6c7tWSAM+B2OcZk67MdqaNQe6BdXHoizl5rB9Ycux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'
}
];

const Electronics = [{
    item: 1,
    name: 'Phones',
    price: 122,
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSwFHtWAqL2pVuGZB0CR8Vf0jqZNJJMl4mXm06pKRbqKN_d-U3sPw8AxvJN3FMMPKWIwz4jGvBTtlYW8xNozbDIi60Nf7ITaSJQ7SqXYTg&usqp=CAc'
},
{
    item: 2,
    name: 'Earphones',
    price: 20,
    img: 'data:image/webp;base64,UklGRtILAABXRUJQVlA4IMYLAACwNQCdASqfAJ8APkEcjESioaETCN3QKAQEtIALaZaUfivDXyC+i/ZHlKdQf8L0I/kv22++f3D9q/zJ+ZfBPgF/kP9B/xH5k8JQAP6sf6D8zPQP/r/yA94vrn/tPyj+gD+V/0v/M/m38a9+H9u/1nsBfyX+m/7f/Cfuh/jPkM/2/9R+XvuD+jv+p/j/gJ/mX9V/4f99/eX/MfNj6//289lP9gC1EFUF6LbGbRXvBY6kcor1gZur3WRah1qCZy+NtgqnbFu+n5DETmYfUmj7xBzJN+yovYmrhHFW1HDCs7FyPbPwXUqoYrAG8MmaCj38UP3rK2fG6rhkux4IGGtdWtc/F7sXW151vb3nI958l5VQL3QEm4rntoTusYuyMn6EfqYOCvR/M1l/6pjMSZEIeE5mMigO9eWFZ4BL8f4NUO3726YIjIZTbOvtXzgUUoImPzhB4hQXO6nPCcIBXlDfXNJTLkle3zmmwKXlYPlAJ97+8uWNUcxaIIoN8brd7S081iNc82XusSeABFngdc+593MhCmlmskpcIRAFdVkrCH5Zs+XguHlyI+/4kjHjn+qGRkCbqbqFrAAA/v/opU6OYzh48cngVKV3pl0KXP+Z+znApUDSE55uZRIb4oV1xRqJ22x/NjMR7f60yQ+nYSGcWjY+iP9nuLAmuU5lFlcpTPaWwv5arSPdQ3/ykW8RM2B5SHKsyvaSlIz+jDz58kPMctTvEjfly2YbwCxQGRJWjuxFgRYXjkEJZZmZ3zG15c1IAajm5KK8tQA9FesmEcOBRXmM179ViE9uqrM/c2If6LKHMVCsTHamApJE6zADjJV/Z+wuG4Stzu70iBwnVDpuhNqp7jU/q2X1i2qqYRCmd6Yvy4WNqS6XCG/LCnjefNHnjGrwxiEE7D+k+clEROk+RNbDMri6mcDH/O7HK/TnugPXnc9Z0LH1nz9j6/FH8Bmhpl7NbYMSAH5Flv4sAl+N/Awi09Ut1HlsZeAr2pNIK3Ks9atPAY9guFE1GqaXpG8OgJ7/HXos8/E9OBSrg9ulpRI00Xs09N2ObrXQoneTliNMq3GsQkd+FLO3PcqZKoVOujHQ1vBDsbfr2coHsDCvku+btfrdN2HLDsNe9dshidK7RQckgAWd9mQJth7jr7TsFloTq85BwiEE1ZM0NTKs2/ANqAZBWZ6MPgS6A8QhyeadLNqdRCVDVmDjpeH+w2+aL168QfcPEMZCGuMGidcshgiiaJCodUJ2aOX/HhB+Qa0Gb872rhVJzVCwDKxXxOPVVRCy1A/O7pgYuMvpDpU4utqzBULYssTzWrAoJrJR/aOD12eXa5Ad4glIWfrsp9P2LwOIwf5Q75OMFgB8zoSSqAWMNYCfv1VM+/Xh5XGzOuidn8f+QRE/2y3o8xAsM8VXi51t7SiMcARONoI4zDp/KVNObgCt9APrrCdiOj6HNcYvmAdFzCvgeB+QpyWyiHMkNxCHcPtVJzW9mWgDBjjuKXkdcQYn3zBpzgGCe718bEMeXolkfC8v8HAiN7wH1t+T7a7BNpxB5Od+tRWs96dXOH+pUb87Rgc8JgDFKxQmMSYeO/S3Tq9UHjXl9uPiCG++et17S60y5mxJPo+u3QQ01rb3VgeSrIbrI+pbx8msylHROKHh//47xMTVXvcscHoTjlqKEfjmUpTKEvOr9IOi6fMC2myKFD29S5XreBniRpciSGt4JiD8qvg5kVx5ytaxoS/iJ+OkbOO0803/Hm147Y9bTFu/4uKqyUO9PLHuRmGqylt8R2qFOyXertg/8TOEWZPLx2AmsSa7e6j8fCRRuuHNhcEmuwtudSh57gDGyHqRTXLmsUArbeX6gSrzypRNY+UGYKqOuwuS7T9/QA0rwgV40/EFyDBgwoRoLcNDIszqykjz9LeIbtp0Ln/tCMmPnr6TsKxxhuxnBGRq1kJCai/2FBjv/gbpI84KgKAUt8Ty7rL/e8cF17RYjJjf1nujWXVkGJnfLeDVKlwAG8fhMeqdZNGYOAgJxsL7JO82tTHjat/Z8eMpoLR9PsxfyPYUF/LFjyfRmkAC9/tiwLPZ+oHMM7Drt/a7fHV47TQnGWYUriFRla+Ql9AxC6qP6h+QvezZ2altM93638ZHjtQHZPm5TyGNaSNL0zcotHhMb5jZxHuu+TubYmbgoO3ds6Ct/rosSC5JpmCgM2lWHmjajvov1J6EJ/dQPHltjfYWjCzi7V+vKXwYrZCZ/ytOaUMaOtk0DPa5O+qvIg4cK9HLyvJdjS/waiObwglvg7UfNUFtIHeW+eKlP0jdZMDfPz8RXGBfXWVkiAB/ZxivUCmKZnULTzenppZFjiRHEdSBhdABi7n62xG79DkGTPYvfh6fQ3d5GgRU6O8nOdcv0jOXIKbf5BQMw8pA0JtRLOlJ9vWMEZRoAMtJCkdV6Ud4HJD+RigUKoq7ikaZfjd2Sa7FvW3Ddrm8FaKgal1UMLtg7aBg2UGl0udQ7710YraRceqm0H3UlZdhafDnvlCgFwUQ8x4GdKhLH4zu08jfF9L2h+3YmwLftfzOLYBImiHQWLXSOmgMATKNx/ZHFC6r1nHicQgHPIvoE6h+vvx4sYOTspTmX2kUl/QIrVasDv1bpStkWo2x6z8GC3uJwkgFiqoiS3IyuPGzsSZGxFPfW0Mb9nPI6nNRdj7qVDUj5IoR11tlXj3FUgFG3sgSieQxmG/WsnNSLc7S16JrczDQgLfj83weY6KQQR/4kaM4PgCZndPsDGBAETJVaWRP8kiH1KoAhFsa1unlXnyQk+ONlsvfA6aujftysEMt/7PsbdVLvzV5j06Kvhry4OBZD2kQ/6MB2vrRMthzS4L0r6Fe3WS2YDiF5PEh7as5p5///HE9Hcr35+Vnay2RwO8og1nBRrWDE8WbcwOUrd0t9AwhPbtak/lFwoEGwj2rNimhQpMOUTMap6rxUDn95S3HznoQGC2WUl0Yiq6AA9MfQXSx7NstgDqmF4rPy/Zem5boLWqD6N/AAEfVvPpYqo+5e2ASTGOpLUyqtEVZtFvJE6oQWNZNgSMDeDiPAwjLPdwqZIP42ut64TGBtQlATRZtUQXuS/+tQlqeZjcVdS35guRLBUMseUE6/Mw8dLxczNctRWPkDwfqUfbAIosnOWjyQUHPuR5LiMqJ3TM/94e0OwOqhbxm4YRufCgw81Qknhy7pY4eeTSRZwxKoCWhqpF+sEXFI4EWnRAciqWUvoxT8VVZiJHA37KJovK95txqhWP1eWNXtWYPGwhMXjn5fyaHKOueTKUlJGFtadPwoyepIvMljOhnj5YA8THvhFsPPClqPmU4DRtXsvpvBBS1yjhhnEyJxrxCGoOJV2qKod9c2vN1rgYfJH+LDqCT7V0FYgRGBV5i8rdjukofTApwYULxQg7Ur+lKQv2GcUryoLSoVHwiXd7skJOjvIdrxlX0ZvcDHJNd4mmRjVgZPV5KYcf/RMB/eyj8EJGR9f5LKSuIMqPZTn4aH7Zwmt0b7btSjp0/7oET9GzOYZq4796pmHjuIiFqemkF4L9vO//HSGHUL36RGgX75QPh20L+ho1jI6Yx0Sl9m9ra2R/WqaBNp46A6BpB26crOsLw3ztiS2Ol6FMdqUwovsbDpLusMgoBoTUi8jClOZDvjQcjaxHpksEEH0phs0ka2ZO28quHcCk2+5Qh1EHuJzP/+RifErHPKpO1QRUViCV3u/nPQO2x+4UHxplj0G22KTFzXlmS65BmzrJeqZ4MdQJ3aMarGezrrcnqZfVJ2dMGswFr1TE0wApCKMwBvkpJHKYcwIWjoomhJ479ddbhldgzdKUc2MyhZvGYntBX3IUGhRzGPYb706pv/+ywz/EfuoHW04EpAEDwiHJLIiZ6CJ/L2OjYf34s6wCLb77/ui7enKnXuMHGjo+L2H9uvXVbQsY36o1sOoW+BmkzWRGFnEZrfbxPPzFFlK9zuqfhAzuUCuvvGneNxqF2njDxBc8zqROPQJMB5rD2aWVWHx0jL6L9WwiQHQAAAA=='
},
{
    item: 3,
    name: 'Charger',
    price: 30,
    img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRGGY6YiB6FeDtxki2nSTvopnxAZKt2P6Az-6nnXFCn2fsnuGyr4lSjx76z4guhKC2bSjqIjVtabQlPXjhNFNs--KqI5ErOCiMugNA3WdOElqOdEKYmbItMPQ&usqp=CAc'
},
{
    item: 4,
    name: 'Covers',
    price: 40,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Y-06ibck8bOsoycgOI6kVgLT-xuG_QaCMImn_POyDclhrzJ_gw'
}
];

export class Filemain extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedOption: '',
            selectedItemArr: [],
            Name: '',
            Email: '',
            Number: '',
            Password: '',
        }
    }

    getOption = (option) => {
        if (option) {
            if (option.name === 'Clothes') {
                this.setState({
                    selectedOption: option.name,
                    selectedItemArr: Clothes
                })
            }
            else if (option.name === 'Shoes') {
                this.setState({
                    selectedOption: option.name,
                    selectedItemArr: Shoes
                })
            }
            else if (option.name === 'Electronics') {
                this.setState({
                    selectedOption: option.name,
                    selectedItemArr: Electronics
                })
            }
        }
    }

    sortArr = () => {
        var sortedArr = [];
        sortedArr = this.state.selectedItemArr.sort(function (a, b) {
            return a.price - b.price;
        });
        this.setState({
            selectedItemArr: sortedArr
        })
    }

    handleChange = (evt) => {
        if (evt.target.name === 'Name') {
            this.setState({
                Name: evt.target.value,
            });
        }
        else if(evt.target.name === 'Email') {
            this.setState({
                Email: evt.target.value,
            });
        }
        else if(evt.target.name === 'Number') {
            this.setState({
                Number: evt.target.value,
            });
        }
        else if(evt.target.name === 'Password') {
            this.setState({
                Password: evt.target.value,
            });
        }
    }

    onSubmit = () => {
        alert(this.state.Name + " , " + this.state.Email + " , " + this.state.Number + " , " + this.state.Password);
    }

    render() {
        return (
            <div>
                <div>
                    <Headermain getOption={this.getOption} sortArr={this.sortArr} />
                    {/* <BodyWork selectedItemArr={this.state.selectedItemArr} nameField = {'Name'} handleChange = {this.handleChange}/> */}
                    <UserForm type={'Name'} nameField={'Name'} handleChange={this.handleChange} />
                    <UserForm type={'Email'} nameField={'Email'} handleChange={this.handleChange} />
                    <UserForm type={'Phone Number'} nameField={'Number'} handleChange={this.handleChange} />
                    <UserForm type={'Password'} nameField={'Password'} handleChange={this.handleChange} />
                    <SubmitButton onSubmit={this.onSubmit} disableButton={!(this.state.Name.length > 0 && this.state.Email.length > 0 && this.state.Number.length > 0 && this.state.Password.length > 0)} />
                </div>
            </div>
        );
    }
}
export default Filemain;