var XpathBuilder = function()
{
};
XpathBuilder.prototype.getIdExpression = function (elementId)
{
	return 'id("' + elementId + '")';
};
XpathBuilder.prototype.getDescendantSeparator = function ()
{
	return "//";
};
XpathBuilder.prototype.getChildSeparator = function ()
{
	return "/";
};
XpathBuilder.prototype.getMultipleTagNameAndClassNameExpression = function (tagName, className)
{
	return tagName
	+ '[contains(concat(" ",normalize-space(@class)," "),"'
	+ className
	+'")]';
};
XpathBuilder.prototype.getSingleTagNameAndClassNameExpression = function (tagName, className)
{
	return tagName + '[@class="' + className + '"]'
};
XpathBuilder.prototype.createPathFilter = function (path)
{
	return new XpathPathFilter(path);
};
var XpathPathFilter = function (xpath) 
{
	this.xpath = xpath; //TODO rename
	this.elements = CustomBlockerUtil.getElementsByXPath(xpath);
};