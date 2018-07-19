import { combineReducers } from 'redux';
import { user } from './redux/user';
import { menu } from './redux/menu';
import { modalDetail } from './redux/modal/build-modal-detail';
import { securityRole } from './redux/security/role';
import { securityRoleAddEdit } from './redux/security/role-addedit';
import { securityMenu } from './redux/security/menu';
import { securityMenuAddEdit } from './redux/security/menu-addedit';
import { securityUser } from './redux/security/user';
import { securityUserAddEdit } from './redux/security/user-addedit';
import { securityUserResetPwd } from './redux/security/user-resetPwd';
import { securityUserSetRole } from './redux/security/user-setRole';
import { securityUserSetBumen } from './redux/security/user-setBumen';
import { securityUserChangeMobile } from './redux/security/user-changeMobile';
import { securitySysParam } from './redux/security/sysParam';
import { securitySysparamAddEdit } from './redux/security/sysParam-addedit';
import { securityDict } from './redux/security/dict';
import { securityDictAddEdit } from './redux/security/dict-addedit';
import { publicBanner } from './redux/public/banner';
import { publicBannerAddEdit } from './redux/public/banner-addedit';
import { publicAboutusAddEdit } from './redux/public/aboutus-addedit';
import { publicTimeAddEdit } from './redux/public/time-addedit';
import { waitListPostRequest } from './redux/waitList/postRequest';
import { waitListFeedBack } from './redux/waitList/feedback';
import { waitListAlreadyQuest } from './redux/waitList/alreadyQuest';
import { waitListAlreadyQuestAddedit } from './redux/waitList/alreadyQuest-addedit';
import { generalTextParam } from './redux/general/text-param';
import { generalTextParamAddEdit } from './redux/general/text-param-addedit';
import { newIdAddCompany } from './redux/newId/addCompany';
import { newIdBank } from './redux/newId/bank';
import { newIdOperation } from './redux/newId/operation';
import { newIdOperationAddEdit } from './redux/newId/operation-addedit';
import { newIdBankAddEdit } from './redux/newId/bank-addedit';
import { newIdYezhu } from './redux/newId/yezhu';
import { newIdYezhuAddEdit } from './redux/newId/yezhu-addedit';
import { newIdSupervise } from './redux/newId/supervise';
import { newIdSuperviseAddEdit } from './redux/newId/supervise-addedit';
import { newIdCompanyConstruct1 } from './redux/newId/companyConstruct1';
import { waitListTextMessage } from './redux/waitList/textMessage';
import { waitListTextMessageAddEdit } from './redux/waitList/textMessage-addedit';

export default combineReducers({
  user,
  menu,
  modalDetail,
  securityRole,
  securityRoleAddEdit,
  securityMenu,
  securityMenuAddEdit,
  securityUser,
  securityUserAddEdit,
  securityUserSetRole,
  securityUserSetBumen,
  securityUserResetPwd,
  securityUserChangeMobile,
  securitySysParam,
  securitySysparamAddEdit,
  securityDict,
  securityDictAddEdit,
  publicBanner,
  publicBannerAddEdit,
  publicAboutusAddEdit,
  publicTimeAddEdit,
  waitListPostRequest,
  waitListFeedBack,
  waitListAlreadyQuest,
  waitListAlreadyQuestAddedit,
  generalTextParam,
  generalTextParamAddEdit,
  newIdAddCompany,
  newIdBank,
  newIdOperation,
  newIdOperationAddEdit,
  newIdBankAddEdit,
  newIdYezhu,
  newIdYezhuAddEdit,
  newIdSupervise,
  newIdSuperviseAddEdit,
  newIdCompanyConstruct1,
  waitListTextMessage,
  waitListTextMessageAddEdit
});
