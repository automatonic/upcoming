(function(){dust.register("upcoming_evtcats",body_0);function body_0(chk,ctx){return chk.section(ctx.get("evtCats"),ctx,{"block":body_1},null);}function body_1(chk,ctx){return chk.write(" ").exists(ctx.get("evts"),ctx,{"else":body_2,"block":body_3},null);}function body_2(chk,ctx){return chk.reference(ctx.getPath(false,["res","no_events"]),ctx,"h");}function body_3(chk,ctx){return chk.write(" <div class=\"evtcat\"><span class=\"caption\">").reference(ctx.get("caption"),ctx,"h").write("</span><span class=\"range\">").reference(ctx.get("range"),ctx,"h").write("</span><div class=\"evts\">").section(ctx.get("evts"),ctx,{"block":body_4},null).write("</div></div>");}function body_4(chk,ctx){return chk.write("<div class=\"evt\"><span class=\"toggle\" id=\"evt_tgl_").reference(ctx.get("id"),ctx,"h").write("\" onclick=\"upcoming.toggleEvtDetail(").reference(ctx.get("id"),ctx,"h").write(");\">+</span><span class=\"title\">").exists(ctx.get("titleHref"),ctx,{"else":body_5,"block":body_6},null).write(" - ").reference(ctx.get("range"),ctx,"h").write(" - ").reference(ctx.get("allDay"),ctx,"h").write(" - ").reference(ctx.get("duration"),ctx,"h").write(" </span><div class=\"detail\" id=\"evt_dtl_").reference(ctx.get("id"),ctx,"h").write("\" style=\"display:none;\"><strong class=\"when\">When</strong><span class=\"when\">").reference(ctx.get("duration"),ctx,"h").write("</span><br /><strong class=\"where\">Where</strong><span class=\"where\">").exists(ctx.get("whereHref"),ctx,{"else":body_7,"block":body_8},null).write("</span><br /><strong class=\"createdBy\">Created by</strong><span class=\"createdBy\">").reference(ctx.get("createdBy"),ctx,"h").write("</span><br /><strong class=\"description\">Description</strong><span class=\"description\">").reference(ctx.get("description"),ctx,"h").write("</span></div></div>");}function body_5(chk,ctx){return chk.reference(ctx.get("title"),ctx,"h");}function body_6(chk,ctx){return chk.write("<a href=\"").reference(ctx.get("titleHref"),ctx,"h").write("\">").reference(ctx.get("title"),ctx,"h").write("</a>");}function body_7(chk,ctx){return chk.reference(ctx.get("where"),ctx,"h");}function body_8(chk,ctx){return chk.write("<a href=\"").reference(ctx.get("whereHref"),ctx,"h").write("\">").reference(ctx.get("where"),ctx,"h").write("</a>");}return body_0;})();