module.exports = [
    {
        id: "file",
        caption: "文件",
        items: [
            {
                caption: "新建文件",
                command: "file.open"
            },
            { type: "separator" },
            {
                caption: "保存",
                command: "editor.save"
            },
            {
                caption: "保存所有",
                command: "editor.save.all"
            },
            { type: "separator" },
            {
                caption: "设置",
                command: "settings.open"
            }
        ]
    },
    {
        id: "view",
        caption: "查看",
        items: [
            {
                caption: "打开/关闭菜单栏",
                command: "view.menubar.toggle"
            }
        ]
    },
    {
        id: "tools",
        caption: "工具",
        items: [
            {
                caption: "命令...",
                command: "palette.open"
            }
        ]
    }
];
