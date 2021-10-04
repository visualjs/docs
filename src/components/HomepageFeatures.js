import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  "基础表格功能",
  "自定义单元格行内编辑",
  "自定义单元格渲染",
  "类似 Excel 的范围选择",
  "类似 Excel 的下拉填充",
  "复制粘贴",
  "冻结列（支持左固定和右固定）",
  "冻结行（支持顶部固定和底部固定）",
  "列分组（支持多级分组）",
  "虚拟列表",
  "自定义右键菜单",
  "..."
];

function Feature({title}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((title, idx) => (
            <Feature key={idx} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
}
