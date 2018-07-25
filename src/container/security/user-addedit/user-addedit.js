import React from 'react';
import {
  initStates,
  doFetching,
  cancelFetching,
  setSelectData,
  setPageData,
  restore
} from '@redux/security/user-addedit';
import { getQueryString } from 'common/js/util';
import { DetailWrapper } from 'common/js/build-detail';
import { getUserId } from '../../../common/js/util';
import {getUserDetail} from '../../../api/user';
@DetailWrapper(
  state => state.securityUserAddEdit,
  { initStates, doFetching, cancelFetching, setSelectData, setPageData, restore }
)
class UserAddEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bankName: '',
      subbranch: ''
    };
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  componentDidMount() {
    getUserDetail(getUserId()).then((res) => {
      this.setState({ bankName: res.bankName, subbranch: res.subbranch });
    });
  }
  render() {
    const fields = [{
      title: '角色',
      field: 'roleCode',
      type: 'select',
      listCode: '631046',
      params: {
        updater: getUserId()
      },
      keyName: 'code',
      valueName: 'name',
      required: true
    }, {
      title: '用户名',
      field: 'loginName',
      required: true
    }, {
      title: '真实姓名',
      field: 'realName',
      required: true
    }, {
      title: '密码',
      field: 'loginPwd',
      type: 'password',
      required: true
    }, {
      title: '用户类型',
      field: 'type',
      value: 'B',
      hidden: true,
      required: true
    }, {
      title: '手机号',
      field: 'mobile',
      mobile: true,
      required: true
    }];
    return this.state.bankName ? this.props.buildDetail({
      fields,
      addCode: 631070,
      beforeSubmit: (params) => {
        params.bankName = this.state.bankName;
        params.subbranch = this.state.subbranch;
        return params;
    }
    }) : null;
  }
}

export default UserAddEdit;
