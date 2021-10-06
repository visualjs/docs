import React, { createRef } from 'react';
import styles from './grid.module.css';
import clsx from 'clsx';
import { Grid, RowData } from "@visualjs/grid";
import { CheckboxRender, RatingRender, SelectionRender, HyperlinkRender } from "@visualjs/grid";
import { RatingEditor, InputEditor, CheckboxEditor, SelectionEditor } from "@visualjs/grid";
import { BooleanTransformer, SelectionTransformer } from "@visualjs/grid";
import { name, country, game, date, numeric, month } from './fake';
import { monthOptions, languageOptions } from './fake';

import "@visualjs/grid/dist/style.css";

class GridExample extends React.Component {

    container = createRef<HTMLDivElement>();

    grid = null;

    componentDidMount() {

        let rows: RowData[] = [];

        for (let i = 0; i < 100; i++) {

            const countryData = country(i);

            rows.push({
                id: 'row_' + i,
                name: name(i),
                status: i % 2 == 0,
                month: [month(), month()],
                language: [countryData.language],
                country: countryData.country,
                continent: countryData.continent,
                game: { title: game(i), link: "https://www.example.com" },
                bought: numeric(100) > 50,
                balance: numeric(10000),
                rating: numeric(10),
                winnings: numeric(100000),
                date: date(new Date(2021, 1), new Date(2021, 6)).toString(),
            });
        }

        this.grid = new Grid(this.container.current, {
            columns: [
                { headerName: 'Name', field: 'name', width: 120, resizable: true, cellEditor: InputEditor },
                {
                    headerName: 'Status', field: 'status', width: 80, resizable: true,
                    transformer: new BooleanTransformer(),
                    cellRender: CheckboxRender, cellEditor: CheckboxEditor
                },
                {
                    headerName: 'Month', field: 'month', resizable: true,
                    transformer: new SelectionTransformer({
                        allowNotExistOption: false, options: Object.keys(monthOptions)
                    }),
                    cellRender: SelectionRender,
                    cellEditor: SelectionEditor,
                    cellParams: { options: monthOptions, multiple: true }
                },
                { headerName: 'Game Name', field: 'game', resizable: true, cellRender: HyperlinkRender },
                {
                    headerName: 'Language', field: 'language', width: 100, resizable: true,
                    transformer: new SelectionTransformer({
                        allowNotExistOption: false, options: Object.keys(languageOptions)
                    }),
                    cellRender: SelectionRender,
                    cellEditor: SelectionEditor,
                    cellParams: { options: languageOptions },
                },
                { headerName: 'Country', field: 'country', resizable: true },
                { headerName: 'Continent', field: 'continent', resizable: true },
                { headerName: 'Bought', field: 'bought', resizable: true, cellRender: CheckboxRender },
                {
                    headerName: 'Bank Balance', field: 'balance', resizable: true,
                    cellEditor: InputEditor,
                    cellParams: { type: 'number' }
                },
                {
                    headerName: 'Rating', field: 'rating', pinned: 'left', resizable: true,
                    cellRender: RatingRender,
                    cellEditor: RatingEditor
                },
                {
                    headerName: 'Total Winnings', field: 'winnings', resizable: true,
                    cellEditor: InputEditor,
                    cellParams: { type: 'number' }
                },
                { headerName: 'Date', field: 'date', resizable: true },
            ],
            rows: rows,

            rowHeight: 30,
            fillable: 'xy',
            getColumnMenuItems: (params) => {
                const options = params.grid.getColumnOptions(params.column);

                const setColumnPinned = (pinned?: 'left' | 'right') => {
                    params.grid.setColumnPinned(params.column, pinned);
                }

                const pinnedIcon = (pinned?: 'left' | 'right') => {
                    if (pinned === options.pinned) {
                        return 'vg-checkmark';
                    }
                }

                return [
                    {
                        name: 'Pin Current Column', icon: 'vg-pin', disabled: options.readonly, subMenus: [
                            { name: 'Pin Left', action: () => setColumnPinned('left'), icon: pinnedIcon('left') },
                            { name: 'Pin Right', action: () => setColumnPinned('right'), icon: pinnedIcon('right') },
                            { name: 'No Pin', action: () => setColumnPinned(), icon: pinnedIcon() },
                        ],
                    },
                    {
                        name: 'Flex', icon: options.flex ? 'vg-checkmark' : '', action: () => {
                            params.grid.setColumnWidth(params.column, { flex: Number(!options.flex) });
                        }
                    },
                    {
                        name: 'Visible', icon: options.visible ? 'vg-checkmark' : '', action: () => {
                            params.grid.setColumnVisible(params.column, false);
                        }
                    }
                ];
            },
            getContextMenuItems: (params) => {

                const options = params.grid.getColumnOptions(params.column);

                const setRowsPinned = (pinned?: 'top' | 'bottom') => {
                    if (pinned == 'top') {
                        params.grid.appendPinnedTopRows(params.grid.getSelectedRows());
                    } else if (pinned == 'bottom') {
                        params.grid.appendPinnedBottomRows(params.grid.getSelectedRows());
                    } else {
                        params.grid.takePinnedRows(params.grid.getSelectedRows());
                    }
                }

                const pinnedTopRowIcon = () => {
                    return params.grid.isPinnedTop(params.row) ? 'vg-checkmark' : '';
                }
                const pinnedBottomRowIcon = () => {
                    return params.grid.isPinnedBottom(params.row) ? 'vg-checkmark' : '';
                }
                const noPinnedRowIcon = () => {
                    return !params.grid.isPinnedRow(params.row) ? 'vg-checkmark' : '';
                }

                return [
                    { name: 'Enlarge', icon: 'vg-enlarge-simplicit' },
                    { separator: true },
                    {
                        name: 'Pin Current Row', icon: 'vg-pin', subMenus: [
                            { name: 'Pin Top', action: () => setRowsPinned('top'), icon: pinnedTopRowIcon() },
                            { name: 'Pin Bottom', action: () => setRowsPinned('bottom'), icon: pinnedBottomRowIcon() },
                            { name: 'No Pin', action: () => setRowsPinned(), icon: noPinnedRowIcon() },
                        ]
                    },
                    { separator: true },
                    { name: 'Copy', icon: 'vg-copy', action: () => params.grid.copySelection() },
                    { name: 'Paste', disabled: options.readonly, icon: 'vg-paste', action: () => params.grid.pasteFromClipboard() },
                    { separator: true },
                    {
                        name: 'Delete', disabled: options.readonly, icon: 'vg-trash-bin', action: () => {
                            params.grid.removeRows([params.row]);
                        }
                    },
                    { separator: true },
                    { name: 'Download', icon: 'vg-download', disabled: true },
                ];
            }
        });
    }

    render() {
        return (
            <div ref={this.container} className={clsx(styles.vGridTheme, styles.gridContainer)}></div>
        );
    }
}

export default GridExample;
