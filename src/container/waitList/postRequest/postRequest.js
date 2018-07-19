import React from 'react';
import { Card, Button } from 'antd';
import listWrapper from 'common/js/build-list';
import {
  getUserId,
  getUserKind,
  dateTimeFormat
} from 'common/js/util';
import { getUserDetail } from 'api/user';
import { handle } from 'api/downLoad';
import { getDictList } from 'api/dict';

class PostRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      statusDict: {}
    };
    this.lookDetail = this.lookDetail.bind(this);
  };
  componentDidMount() {
    if (getUserKind() === 'B') {
      getUserDetail(getUserId()).then((data) => {
        handle(data.bankName, data.subbranch, 1).then(data => {
          this.setState({
            data: data
          });
        });
      });
      getDictList({ parentKey: 'message_status' }).then(data => {
        let dict = {};
        data.forEach(d => {
          dict[d.dkey] = d.dvalue;
        });
        this.setState({ statusDict: dict });
      });
    };
  }
  lookDetail(code) {
    this.props.history.push(`/waitList/postRequest/addedit?code=${code}`);
  };
  render() {
    const { data, statusDict } = this.state;
    return (
       <div style={{ width: '100%' }}>
      { data.length
         ? data.map((v, i) =>
              <Card key={v.code} onClick={ () => { this.lookDetail(v.code); } } style={{ width: '100%', height: '164px', padding: '0px', borderColor: 'rgb(206,234,252)', boxShadow: '0px 0px 30px rgba(153,212,255,0.6) inset', marginBottom: '10px' }}>
                <div style={{ marginBottom: '10px' }}>
                  <span style={{ fontSize: '14px' }}>发件人：</span>
                  <i style={{ fontStyle: 'normal' }}>{ v.companyName }</i>
                  <i style={{ fontStyle: 'normal', marginLeft: 20, color: '#999' }}>{ dateTimeFormat(v.sendDatetime) }</i>
                </div>
                <div style={{ width: '100%', marginBottom: '10px' }}>
                  <i style={{ display: 'inline-block', whiteSpace: 'nowrap', fontStyle: 'normal', fontSize: '16px' }}>{ v.title }</i>
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <span style={{ fontSize: '14px' }}>扣款账户名称：</span>
                  <i style={{ fontStyle: 'normal', marginRight: '20px', color: 'red' }}>{ v.account }</i>
                  <span style={{ fontSize: '14px' }}>扣款账户账号：</span>
                  <i style={{ fontStyle: 'normal', color: 'red' }}>{ v.bankcardNumber }</i>
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <span style={{ fontSize: '14px' }}>项目名称：</span>
                  <i style={{ fontStyle: 'normal', marginRight: '20px', color: 'red' }}>{ v.projectName }</i>
                  <span style={{ fontSize: '14px' }}>工资单总人数：</span>
                  <i style={{ fontStyle: 'normal', marginRight: '20px', color: 'red' }}>{ v.number }</i>
                  <span style={{ fontSize: '14px' }}>工资单总金额：</span>
                  <i style={{ fontStyle: 'normal', marginRight: '20px', color: 'red' }}>{ v.totalAmount / 1000 }</i>
                </div>
              </Card>)
          : <div style={{ width: '100%', height: '500px', textAlign: 'center' }} >
              <img src={require('./noInfo.png')} alt="" style={{ width: '261px', height: '168px', margin: '15% auto 34px' }} />
              <p style={{ fontSize: '14px', color: '#939599' }}>暂无信息</p>
            </div>
      }</div>
    );
  }
}

export default PostRequest;