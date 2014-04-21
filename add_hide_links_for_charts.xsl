<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="@*|node()">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="//chart/title | //table/title | //event/title">
    <xsl:copy-of select="."/>
    <xsl:text>&#xa;      </xsl:text>
    <option name="link.visible">false</option>
  </xsl:template>

</xsl:stylesheet>
