import React from 'react';
import { rock, getUserId } from 'api/user';
import { Modal } from 'antd';
import {
  setTableData,
  setPagination,
  setBtnList,
  setSearchParam,
  clearSearchParam,
  doFetching,
  cancelFetching,
  setSearchData
} from '@redux/security/user';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg, showSucMsg } from 'common/js/util';
import {getUserDetail} from '../../../api/user';

@listWrapper(
  state => ({
    ...state.securityUser,
    parentCode: state.menu.subMenuCode
  }),
  {
    setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData
  }
)
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bankName: '',
      subbranch: ''
    };
  }
  componentDidMount() {
    getUserDetail(getUserId()).then((res) => {
      this.setState({ bankName: res.bankName, subbranch: res.subbranch });
    });
  }
  render() {
    const fields = [{
      title: '用户名',
      field: 'loginName',
      render: (v) => v + '1'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'user_status'
    }, {
      title: '角色',
      field: 'roleCode',
      type: 'select',
      listCode: '631046',
      keyName: 'code',
      valueName: 'name'
    }, {
      title: '手机号',
      field: 'mobile',
      mobile: true
    }, {
      title: '关键字',
      field: 'keyword',
      placeholder: '用户名/手机号',
      search: true,
      hidden: true
    }];
    const btnEvent = {
      reset: (selectedRowKeys, selectedRows) => {
        if (!selectedRowKeys.length) {
          showWarnMsg('请选择记录');
        } else if (selectedRowKeys.length > 1) {
          showWarnMsg('请选择一条记录');
        } else {
          this.props.history.push(`/security/user/resetPwd?userId=${selectedRowKeys[0]}&loginName=${selectedRows[0].loginName}`);
        }
      },
      rock: (selectedRowKeys, selectedRows) => {
        if (!selectedRowKeys.length) {
          showWarnMsg('请选择记录');
        } else if (selectedRowKeys.length > 1) {
          showWarnMsg('请选择一条记录');
        } else {
          Modal.confirm({
            okText: '确认',
            cancelText: '取消',
            content: '确定注销/激活？',
            onOk: () => {
              this.props.doFetching();
              rock(selectedRowKeys[0], getUserId()).then(() => {
                showSucMsg('操作成功');
                this.props.cancelFetching();
              }).catch(this.props.cancelFetching);
            }
          });
        }
      },
      assign: (selectedRowKeys, selectedRows) => {
        if (!selectedRowKeys.length) {
          showWarnMsg('请选择记录');
        } else if (selectedRowKeys.length > 1) {
          showWarnMsg('请选择一条记录');
        } else {
          if(selectedRows[0].roleCode.slice(0, 2) !== 'RO') {
            this.props.history.push(`/security/user/setRole?userId=${selectedRowKeys[0]}&loginName=${selectedRows[0].loginName}`);
          } else {
            showWarnMsg('该用户为管理员，无法设置角色');
          }
        }
      },
      changeMobile: (selectedRowKeys, selectedRows) => {
        if (!selectedRowKeys.length) {
          showWarnMsg('请选择记录');
        } else if (selectedRowKeys.length > 1) {
          showWarnMsg('请选择一条记录');
        } else {
          this.props.history.push(`/security/user/changeMobile?userId=${selectedRowKeys[0]}&loginName=${selectedRows[0].loginName}`);
        }
      }
    };
    return this.state.bankName ? this.props.buildList({
      fields,
      btnEvent,
      searchParams: {
        bankName: this.state.bankName,
        subbranch: this.state.subbranch,
        updater: ''
      },
      pageCode: 631085,
      rowKey: 'userId'
    }) : null;
  }
}

export default User;
