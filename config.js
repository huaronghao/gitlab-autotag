'use strict';

const moment = require('moment');

const workspacePath = `${__dirname}/tags/`;

module.exports = {
  port: '2999',
  repo: {
    // Gitlab 的 group名称
    'trade': {
      // 代码操作目录
      workspace: `${workspacePath}trade-tags`,
      // 远程地址
      remote: 'git@git.qufenqi.com:universe/trade/',
      // 主分支
      master: 'master',
      // 获取tagName的方法，可直接使用cmd命令，例如exec(`shell command`)
      getTagName(hook_data, project_path) {
        return `online-${hook_data.project.name}-${moment(new Date()).format('YYYYMMDDHHmmss')}`;
      },
      // 获取tag message的方法，可直接使用cmd命令，例如exec(`shell command`)
      getTagMsg(hook_data, project_path) {
        return hook_data.object_attributes.title;
      },
      // GitlabToekn，自定义即可
      gitlabToken: 'trade-merge-event-gitlabToken',
      // 钉钉机器人的token
      dingtalkToken: '3580e17e761c65ee7ad3b64073d8ec32e89f770de053700ad4d3d36552be9465'
    }
  }
};
