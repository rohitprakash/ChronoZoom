var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CZ;
(function (CZ) {
    (function (UI) {
        var TourListBox = (function (_super) {
            __extends(TourListBox, _super);
            function TourListBox(container, listItemContainer, contentItems, takeTour, editTour) {
                this.takeTour = takeTour;
                this.editTour = editTour;
                var listBoxInfo = {
                    context: contentItems,
                    sortableSettings: null
                };
                var listItemsInfo = {
                    default: {
                        container: listItemContainer,
                        uiMap: {
                            closeButton: ".cz-listitem-close-btn",
                            iconImg: ".cz-contentitem-listitem-icon > img",
                            titleTextblock: ".cz-contentitem-listitem-title",
                            typeTextblock: ".cz-contentitem-listitem-highlighted"
                        }
                    }
                };
                listItemsInfo.default.ctor = TourListItem;
                        _super.call(this, container, listBoxInfo, listItemsInfo);
            }
            Object.defineProperty(TourListBox.prototype, "TakeTour", {
                get: function () {
                    return this.takeTour;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TourListBox.prototype, "EditTour", {
                get: function () {
                    return this.editTour;
                },
                enumerable: true,
                configurable: true
            });
            return TourListBox;
        })(UI.ListBoxBase);
        UI.TourListBox = TourListBox;        
        var TourListItem = (function (_super) {
            __extends(TourListItem, _super);
            function TourListItem(parent, container, uiMap, context) {
                        _super.call(this, parent, container, uiMap, context);
                this.iconImg = this.container.find(uiMap.iconImg);
                this.titleTextblock = this.container.find(uiMap.titleTextblock);
                this.iconImg.attr("src", this.data.icon || "/images/Temp-Thumbnail2.png");
                this.titleTextblock.text(this.data.title);
                this.container.find("#takeTour").click(function (e) {
                    parent.TakeTour(context);
                });
                container.find(".cz-tourslist-editing").css("display", parent.EditTour ? "inline" : "none");
                if(parent.EditTour) {
                    this.container.find("#editTour").click(function (e) {
                        parent.EditTour(context);
                    });
                }
            }
            return TourListItem;
        })(UI.ListItemBase);
        UI.TourListItem = TourListItem;        
    })(CZ.UI || (CZ.UI = {}));
    var UI = CZ.UI;
})(CZ || (CZ = {}));
