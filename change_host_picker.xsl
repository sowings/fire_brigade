<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="@*|node()">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="//input/populatingSearch[@fieldForValue='host']">
      <populatingSearch fieldForValue="orig_host" fieldForLabel="orig_host">| inputlookup fb_hostname_index_cache | dedup orig_host</populatingSearch>
  </xsl:template>

  <xsl:template match="//input/populatingSearch[@fieldForValue='orig_index']">
      <populatingSearch fieldForValue="orig_index" fieldForLabel="orig_index">| inputlookup fb_hostname_index_cache | search orig_host=$host$ | dedup orig_index</populatingSearch>
  </xsl:template>

</xsl:stylesheet>
