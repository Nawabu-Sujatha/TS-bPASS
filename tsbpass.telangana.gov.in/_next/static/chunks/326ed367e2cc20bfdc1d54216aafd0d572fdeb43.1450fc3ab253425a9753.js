(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [7], {
        "T/rR": function(E, A, a) {
            "use strict";
            var i = a("wx14"),
                e = a("zLVn"),
                _ = a("eC2I"),
                S = a.n(_),
                t = a("q1tI"),
                p = a.n(t),
                R = a("vUet"),
                n = ["bsPrefix", "variant", "animation", "size", "children", "as", "className"],
                r = p.a.forwardRef((function(E, A) {
                    var a = E.bsPrefix,
                        _ = E.variant,
                        t = E.animation,
                        r = E.size,
                        o = E.children,
                        C = E.as,
                        T = void 0 === C ? "div" : C,
                        U = E.className,
                        I = Object(e.a)(E, n),
                        O = (a = Object(R.a)(a, "spinner")) + "-" + t;
                    return p.a.createElement(T, Object(i.a)({
                        ref: A
                    }, I, {
                        className: S()(U, O, r && O + "-" + r, _ && "text-" + _)
                    }), o)
                }));
            r.displayName = "Spinner", A.a = r
        },
        YFqc: function(E, A, a) {
            E.exports = a("cTJO")
        },
        cTJO: function(E, A, a) {
            "use strict";
            var i = a("zoAU"),
                e = a("7KCV");
            A.__esModule = !0, A.default = void 0;
            var _, S = e(a("q1tI")),
                t = a("elyg"),
                p = a("nOHt"),
                R = new Map,
                n = window.IntersectionObserver,
                r = {};
            var o = function(E, A) {
                var a = _ || (n ? _ = new n((function(E) {
                    E.forEach((function(E) {
                        if (R.has(E.target)) {
                            var A = R.get(E.target);
                            (E.isIntersecting || E.intersectionRatio > 0) && (_.unobserve(E.target), R.delete(E.target), A())
                        }
                    }))
                }), {
                    rootMargin: "200px"
                }) : void 0);
                return a ? (a.observe(E), R.set(E, A), function() {
                    try {
                        a.unobserve(E)
                    } catch (A) {
                        console.error(A)
                    }
                    R.delete(E)
                }) : function() {}
            };

            function C(E, A, a, i) {
                (0, t.isLocalURL)(A) && (E.prefetch(A, a, i).catch((function(E) {
                    0
                })), r[A + "%" + a] = !0)
            }
            var T = function(E) {
                var A = !1 !== E.prefetch,
                    a = S.default.useState(),
                    e = i(a, 2),
                    _ = e[0],
                    R = e[1],
                    T = (0, p.useRouter)(),
                    U = T && T.pathname || "/",
                    I = S.default.useMemo((function() {
                        var A = (0, t.resolveHref)(U, E.href, !0),
                            a = i(A, 2),
                            e = a[0],
                            _ = a[1];
                        return {
                            href: e,
                            as: E.as ? (0, t.resolveHref)(U, E.as) : _ || e
                        }
                    }), [U, E.href, E.as]),
                    O = I.href,
                    L = I.as;
                S.default.useEffect((function() {
                    if (A && n && _ && _.tagName && (0, t.isLocalURL)(O) && !r[O + "%" + L]) return o(_, (function() {
                        C(T, O, L)
                    }))
                }), [A, _, O, L, T]);
                var s = E.children,
                    P = E.replace,
                    N = E.shallow,
                    c = E.scroll;
                "string" === typeof s && (s = S.default.createElement("a", null, s));
                var l = S.Children.only(s),
                    D = {
                        ref: function(E) {
                            E && R(E), l && "object" === typeof l && l.ref && ("function" === typeof l.ref ? l.ref(E) : "object" === typeof l.ref && (l.ref.current = E))
                        },
                        onClick: function(E) {
                            l.props && "function" === typeof l.props.onClick && l.props.onClick(E), E.defaultPrevented || function(E, A, a, i, e, _, S) {
                                ("A" !== E.currentTarget.nodeName || ! function(E) {
                                    var A = E.currentTarget.target;
                                    return A && "_self" !== A || E.metaKey || E.ctrlKey || E.shiftKey || E.altKey || E.nativeEvent && 2 === E.nativeEvent.which
                                }(E) && (0, t.isLocalURL)(a)) && (E.preventDefault(), null == S && (S = i.indexOf("#") < 0), A[e ? "replace" : "push"](a, i, {
                                    shallow: _
                                }).then((function(E) {
                                    E && S && (window.scrollTo(0, 0), document.body.focus())
                                })))
                            }(E, T, O, L, P, N, c)
                        }
                    };
                return A && (D.onMouseEnter = function(E) {
                    (0, t.isLocalURL)(O) && (l.props && "function" === typeof l.props.onMouseEnter && l.props.onMouseEnter(E), C(T, O, L, {
                        priority: !0
                    }))
                }), (E.passHref || "a" === l.type && !("href" in l.props)) && (D.href = (0, t.addBasePath)((0, t.addLocale)(L, T && T.locale, T && T.defaultLocale))), S.default.cloneElement(l, D)
            };
            A.default = T
        },
        eC2I: function(E, A, a) {
            var i;
            ! function() {
                "use strict";
                var a = {}.hasOwnProperty;

                function e() {
                    for (var E = [], A = 0; A < arguments.length; A++) {
                        var i = arguments[A];
                        if (i) {
                            var _ = typeof i;
                            if ("string" === _ || "number" === _) E.push(i);
                            else if (Array.isArray(i)) {
                                if (i.length) {
                                    var S = e.apply(null, i);
                                    S && E.push(S)
                                }
                            } else if ("object" === _) {
                                if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
                                    E.push(i.toString());
                                    continue
                                }
                                for (var t in i) a.call(i, t) && i[t] && E.push(t)
                            }
                        }
                    }
                    return E.join(" ")
                }
                E.exports ? (e.default = e, E.exports = e) : void 0 === (i = function() {
                    return e
                }.apply(A, [])) || (E.exports = i)
            }()
        },
        hy4D: function(E, A, a) {
            "use strict";
            A.a = {
                LOCATION_DROPDOWN: {
                    USECASE: "LOCATION_DROPDOWN",
                    URL: "/api/form/location"
                },
                FLOOR_DROPDOWN: {
                    USECASE: "FLOOR_DROPDOWN",
                    URL: "/api/form/floors"
                },
                SRO_DROPDOWN: {
                    USECASE: "SRO_DROPDOWN",
                    URL: "/api/form/sro"
                },
                GET_APPLICATION_DETAILS: {
                    USECASE: "GET_DETAILS_OF_APPLICATION",
                    URL: "/api/application/details?identifier=:appId"
                },
                GET_AUTHN_APPLICATION_DETAILS: {
                    USECASE: "GET_DETAILS_OF_APPLICATION_AUTHENTICATED",
                    URL: "/api/application/details"
                },
                INITIATE_PAYMENT: {
                    USECASE: "INITIATE_PAYMENT_FOR_APPLICATION",
                    URL: "/api/application/initiatePayment?identifier=:appId&type=:type"
                },
                PAYNIMO_INITIATE_PAYMENT: {
                    USECASE: "PAYNIMO_INITIATE_PAYMENT",
                    URL: "/api/paynimo/payment/initiation"
                },
                PAYNIMO_RETURN: {
                    USECASE: "PAYNIMO_RETURN",
                    URL: "/api/paynimo/payment/return"
                },
                SELF_DECLARATION_UPDATE: {
                    USECASE: "SELF_DECLARATION_ACCEPTED",
                    URL: "/api/application/acceptSelfDeclaration?identifier=:appId"
                },
                VALIDATE_DOCUMENTS: {
                    USECASE: "VALIDATE_DOCUMENT_UPLOADS",
                    URL: "/api/application/validate?identifier=:appId"
                },
                UPLOAD_DOCUMENTS: {
                    USECASE: "UPLOAD_DOCUMENTS_FOR_APPLICATION",
                    URL: "/api/application/upload"
                },
                CREATE_APPLICATION: {
                    USECASE: "CREATE_APPLICATION",
                    URL: "/api/application/create"
                },
                DOWNLOAD_DOCUMENTS: {
                    USECASE: "DOWNLOAD_DOCUMENTS",
                    URL: "/api/application/downloadDocument?identifier=:appId&file_type=:fileType"
                },
                DOWNLOAD_ACKNOWLEDGMENT: {
                    USECASE: "DOWNLOAD_ACKNOWLEDGMENT",
                    URL: "/api/application/acknowledgment"
                },
                AUTO_DCR_VALIDATE: {
                    USECASE: "AUTO_DCR_VALIDATE",
                    URL: "/api/application/autoDCRValidate"
                },
                ADD_AUTO_DCR_FIELDS: {
                    USECASE: "ADD_AUTO_DCR_FIELDS",
                    URL: "/api/application/addAutoDcrFields"
                },
                PAYMENT_SUCCESS: {
                    USECASE: "PAYMENT_SUCCESS",
                    URL: "/api/paynimo/payment/processPayment?identifier=:appId&type=:type"
                },
                RESET_APPLICATION_PASSWORD: {
                    USECASE: "RESET_APPLICAITON_PASSWORD",
                    URL: "/api/application/resetPassword?identifier=:appId"
                },
                UPDATE_AUTO_DCR: {
                    USECASE: "UPDATE_AUTO_DCR",
                    URL: "/api/application/validateAutoDcr"
                },
                GET_APPLICATION_LIST_FOR_ADMIN: {
                    USECASE: "GET_LIST_OF_APPLICATIONS_FOR_ADMIN",
                    URL: "/api/admin/allApplications"
                },
                CREATE_ADMIN: {
                    USECASE: "CREATE_ADMIN",
                    URL: "/api/admin/create"
                },
                ADMIN_ROLES: {
                    USECASE: "GET_ALL_ADMIN_ROLES",
                    URL: "/api/admin/allAdminRoles"
                },
                ALL_OPEN_WORKFLOWS: {
                    USECASE: "ALL_OPEN_WORKFLOWS",
                    URL: "/api/admin/allWorkFlowInProgress"
                },
                ADMIN_LOGIN: {
                    USECASE: "ADMIN_LOGIN",
                    URL: "/api/admin/auth"
                },
                RESET_ADMIN_PASSWORD: {
                    USECASE: "RESET_ADMIN_PASSWORD",
                    URL: "/api/admin/resetPassword"
                },
                UNIQUE_USER: {
                    USECASE: "UNIQUE_USER",
                    URL: "/api/admin/search?user_id=:user_id"
                },
                GET_APPLICATION_ID_FROM_HASH: {
                    USECASE: "GET_APPLICATION_ID_FROM_HASH",
                    URL: "/api/application/getIdentifierFromHash"
                },
                ADD_REVIEW: {
                    USECASE: "ADD_REVIEW",
                    URL: "/api/workflow/admin/review"
                },
                APPROVE_APPLICATION: {
                    USECASE: "APPROVE_APPLICATION",
                    URL: "/api/workflow/admin/approve"
                },
                REJECT_APPLICATION: {
                    USECASE: "REJECT_APPLICATION",
                    URL: "/api/workflow/admin/reject"
                },
                SHORTFALL: {
                    USECASE: "SHORTFALL",
                    URL: "/api/workflow/admin/shortfall"
                },
                REQ_DOCUMENT: {
                    USECASE: "REQ_DOCUMENT",
                    URL: "/api/workflow/admin/document/request"
                },
                NO_DOC_REQUIRED: {
                    USECASE: "NO_DOC_REQUIRED",
                    URL: "/api/workflow/admin/document/approve"
                },
                CERTIFY_FEE: {
                    USECASE: "CERTIFY_FEE",
                    URL: "/api/workflow/admin/certify-fee"
                },
                APPROVE_POST_PROCESSING: {
                    USECASE: "APPROVE_POST_PROCESSING",
                    URL: "/api/workflow/admin/postprocessing/approve"
                },
                REJECT_POST_PROCESSING: {
                    USECASE: "REJECT_POST_PROCESSING",
                    URL: "/api/workflow/admin/postprocessing/reject"
                },
                GET_VALIDATION_FIELDS: {
                    USECASE: "GET_VALIDATION_FIELDS",
                    URL: "/api/workflow/validation/fields"
                },
                SUBMIT_ADDITIONAL_DOCUMENT: {
                    USECASE: "SUBMIT_ADDITIONAL_DOCUMENT",
                    URL: "/api/workflow/document/submit"
                },
                APPLICATION_SETBACKS: {
                    USECASE: "APPLICATION_SETBACK",
                    URL: "/api/form/setback"
                },
                APPLICATION_SLUM_AREA: {
                    USECASE: "APPLICATION_SLUM_AREA",
                    URL: "/api/form/slum_area"
                },
                GET_ADMIN_TEAMS: {
                    USECASE: "GET_ADMIN_TEAMS",
                    URL: "/api/admin/team/search"
                },
                CREATE_TEAM: {
                    USECASE: "CREATE_TEAM",
                    URL: "/api/admin/team/create"
                },
                APPLICATION_MARKET_VALUE: {
                    USECASE: "APPLICATION_MARKET_VALUE",
                    URL: "/api/form/market_value"
                },
                GET_REPORT: {
                    USECASE: "GET_REPORT",
                    URL: "/api/reporting/UlbWiseApplicationsCount"
                },
                GET_STATS: {
                    USECASE: "GET_STATS",
                    URL: "/api/reporting/ulb_stats"
                },
                GET_CHASING_STATS: {
                    USECASE: "GET_CHASING_STATS",
                    URL: "/api/reporting/chasing_stats_by_ulb"
                },
                GET_REPORT_FOR_ULB: {
                    USECASE: "GET_REPORT_FOR_ULB",
                    URL: "/api/reporting/applicationForUlb"
                },
                OPEN_APPLICATION_SEARCH: {
                    USECASE: "OPEN_APPLICATION_SEARCH",
                    URL: "/api/application/userApplicationSearch"
                },
                GET_ADMIN_BY_ROLE: {
                    USECASE: "GET_ADMIN_BY_ROLE",
                    URL: "/api/admin/entitlements/search"
                },
                ASSIGN_TASK: {
                    USECASE: "ASSIGN_TASK",
                    URL: "/api/workflow/admin/task/assign"
                },
                GET_APPLICATION_FOR_TASK_MANAGER: {
                    USECASE: "GET_APPLICATION_FOR_TASK_MANAGER",
                    URL: "/api/admin/allTaskAssignmentApplications"
                },
                GET_OTP: {
                    USECASE: "GET_OTP",
                    URL: "/api/otp/generate"
                },
                VERIFY_OTP: {
                    USECASE: "VERIFY_OTP",
                    URL: "/api/v1/users/verify_otp"
                },
                ADD_COMMENT: {
                    USECASE: "ADD_COMMENT",
                    URL: "/api/admin/comment"
                },
                ADMIN_CHANGE_PASSWORD: {
                    USECASE: "ADMIN_CHANGE_PASSWORD",
                    URL: "/api/admin/changePassword"
                },
                ADMIN_PRE_PROCEEDING_CONDITIONS: {
                    USECASE: "ADMIN_PRE_PROCEEDING_CONDITIONS",
                    URL: "/api/workflow/admin/pre-proceeding/request"
                },
                APPLICANT_PRE_PROCEEDING_ACCEPT: {
                    USECASE: "APPLICANT_PRE_PROCEEDING_ACCEPT",
                    URL: "/api/workflow/pre-proceeding/accept"
                },
                USER_LOGIN: {
                    USECASE: "USER_LOGIN",
                    URL: "/oauth/token"
                },
                CONTACTS: {
                    USECASE: "CONTACTS",
                    URL: "/api/v1/contacts"
                },
                CAPTCHA: {
                    USECASE: "CAPTCHA",
                    URL: "/api/v1/users/verify_captcha"
                },
                FORGOT_PASSWORD: {
                    USECASE: "FORGOT_PASSWORD",
                    URL: "/api/v1/users/send_otp"
                },
                RESET_PASSWORD: {
                    USECASE: "RESET_PASSWORD",
                    URL: "/api/v1/users/reset_password"
                },
                USER_DETAILS: {
                    USECASE: "USER_DETAILS",
                    URL: "/api/v1/users/token"
                },
                USER_LOGOUT: {
                    USECASE: "USER_LOGOUT",
                    URL: "/api/v1/users/signout"
                },
                SEARCH_VILLAGE: {
                    USECASE: "SEARCH_VILLAGE",
                    URL: "/api/v1/villages/search"
                },
                SEARCH_DISTRICT: {
                    USECASE: "SEARCH_DISTRICT",
                    URL: "/api/v1/villages/districts"
                },
                VILLAGE_BY_LOCATION: {
                    USECASE: "VILLAGE_BY_LOCATION",
                    URL: "/api/v1/villages/village_by_location_id"
                },
                SLUM_AREA: {
                    USECASE: "SLUM_AREA",
                    URL: "/api/v1/villages/slums"
                },
                SRO_LIST: {
                    USECASE: "SRO_DISTRICT",
                    URL: "/api/v1/villages/sro?  "
                },
                RELATIONSHIP_TYPE: {
                    USECASE: "RELATIONSHIP_TYPE",
                    URL: "/api/v1/applications/relationship_type"
                },
                APPLICATION: {
                    USECASE: "APPLICATION",
                    URL: "/api/v1/applications"
                },
                QUESTIONS: {
                    USECASE: "QUESTIONS",
                    URL: "/api/v1/properties/questions"
                },
                FILE_UPLOAD: {
                    USECASE: "FILE_UPLOAD",
                    URL: "/api/v1/media/s3_signed_url"
                },
                MEDIA: {
                    USECASE: "MEDIA",
                    URL: "/api/v1/media"
                },
                MEDIA_DELETE: {
                    USECASE: "MEDIA_DELETE",
                    URL: "/api/v1/media"
                },
                PLOT_POST: {
                    USECASE: "PLOT_POST",
                    URL: "/api/v1/properties"
                },
                PLOT_ENUMS: {
                    USECASE: "PLOT_ENUMS",
                    URL: "/api/v1/properties/plot_enums"
                },
                FLOORS: {
                    USECASE: "FLOORS",
                    URL: "/api/v1/properties/floors"
                },
                PROHITED: {
                    USECASE: "PROHITED",
                    URL: "/api/v1/villages/prohibited"
                },
                BUILDING_CATEGORY: {
                    USECASE: "BUILDING_CATEGORY",
                    URL: "/api/v1/properties/building_category"
                },
                BUILDING_SUB_CATEGORY: {
                    USECASE: "BUILDING_SUB_CATEGORY",
                    URL: "/api/v1/properties/building_subcategory"
                },
                GET_SETBACKS: {
                    USECASE: "GET_SETBACKS",
                    URL: "/api/v1/properties/setbacks"
                },
                AUTO_DCR: {
                    USECASE: "AUTO_DCR",
                    URL: "/api/v1/external/dcr_portal/sanction_details"
                },
                AUTO_DCR_CONFIRM: {
                    USECASE: "AUTO_DCR_CONFIRM",
                    URL: "/api/v1/properties/dcr"
                },
                APPLICATION_STATUS_UPDATE: {
                    USECASE: "APPLICATION_STATUS_UPDATE",
                    URL: "/api/v1/applications/update_application_status"
                },
                APPLICATION_SHOW_CAUSE: {
                    USECASE: "APPLICATION_SHOW_CAUSE",
                    URL: "/api/v1/applications/submit_showcause_response"
                },
                ACKOWLEDGEMENT_LETER: {
                    USECASE: "ACKOWLEDGEMENT_LETER",
                    URL: "/api/v1/docupilot/acknowledgement_letter"
                },
                REVISED_FEE_LETER: {
                    USECASE: "REVISED_FEE_LETER",
                    URL: "/api/v1/docupilot/revised_fee_letter"
                },
                APPROVAL_LETTER_DTCP: {
                    USECASE: "APPROVAL_LETTER_DTCP",
                    URL: "/api/v1/docupilot/approval_letter_above_500_dtcp"
                },
                FEE_DETAILS: {
                    USECASE: "FEE_DETAILS",
                    URL: "/api/v1/fee_calculator/fee_details"
                },
                GET_CALCULATED_FEE_BREAKUP: {
                    USECASE: "GET_CALCULATED_FEE_BREAKUP",
                    URL: "/api/v1/fee_details"
                },
                CITIZEN_DASHBOARD: {
                    USECASE: "CITIZEN_DASHBOARD",
                    URL: "/api/v1/citizen_dashboard"
                },
                CITIZEN_DASHBOARD_COPY: {
                    USECASE: "CITIZEN_DASHBOARD",
                    URL: "/api/v1/citizen_dashboard"
                },
                CITIZEN_APPLICATION: {
                    USECASE: "CITIZEN_APPLICATION",
                    URL: "/api/v1/citizen_dashboard/application"
                },
                CITIZEN_SEARCH: {
                    USECASE: "CITIZEN_SEARCH",
                    URL: "/api/v1/citizen_search/search_by_params"
                },
                APPLICANT_SEARCH: {
                    USECASE: "APPLICANT_SEARCH",
                    URL: "/api/v1/applications/search_by_params"
                },
                LOCATIONS: {
                    USECASE: "LOCATIONS",
                    URL: "/api/v1/locations/"
                },
                PAYNIMO_NEW_PAYMENT: {
                    USECASE: "PAYNIMO_NEW_PAYMENT",
                    URL: "/api/v1/payments"
                },
                PAYNIMO_NEW_RETURN: {
                    USECASE: "PAYNIMO_NEW_RETURN",
                    URL: "/api/v1/payments/receive_payment_response"
                },
                SEARCH_BY_PERMIT_NUMBER: {
                    USECASE: "SEARCH_BY_PERMIT_NUMBER",
                    URL: "/api/v1/applications/search_by_permit_number"
                },
                SEARCH_BY_IDENTIFIER: {
                    USECASE: "SEARCH_BY_IDENTIFIER",
                    URL: "/api/v1/applications/search_by_application_identifier"
                },
                SEARCH_BY_IDENTIFIER_FOR_REVISION: {
                    USECASE: "SEARCH_BY_IDENTIFIER_FOR_REVISION",
                    URL: "/api/v1/applications/search_by_application_identifier_for_revision"
                },
                SEARCH_BY_IDENTIFIER_FOR_OCCUPANCY: {
                    USECASE: "SEARCH_BY_IDENTIFIER_FOR_OCCUPANCY",
                    URL: "/api/v1/applications/search_by_application_identifier_for_occupancy"
                },
                CREATE_ADDITIONAL_APPLICATION: {
                    USECASE: "CREATE_ADDITIONAL_APPLICATION",
                    URL: "/api/v1/properties/create_additional_application"
                },
                UPDATE_ADDITIONAL_APPLICATION: {
                    USECASE: "UPDATE_ADDITIONAL_APPLICATION",
                    URL: "/api/v1/properties/update_additional_application"
                },
                CREATE_OCCUPANCY_APPLICATION: {
                    USECASE: "CREATE_OCCUPANCY_APPLICATION",
                    URL: "/api/v1/properties/create_occupancy_application"
                },
                RAZORPAY_PAYMENT: {
                    USECASE: "RAZORPAY_PAYMENT",
                    URL: "/api/v1/payments/razorpay"
                },
                RAZORPAY_PAYMENT_RESPONSE: {
                    USECASE: "RAZORPAY_PAYMENT_RESPONSE",
                    URL: "/api/v1/payments/razorpay_payment_response"
                },
                CORRECTION_PAYMENT: {
                    USECASE: "RAZORPAY_PAYMENT",
                    URL: "/api/v1/correction_payments/razorpay"
                },
                CORRECTION_PAYMENT_RESPONSE: {
                    USECASE: "RAZORPAY_PAYMENT_RESPONSE",
                    URL: "/api/v1/correction_payments/razorpay_payment_response"
                },
                UPDATE_WORK_COMMENCEMENT_DATE: {
                    USECASE: "UPDATE_WORK_COMMENCEMENT_DATE",
                    URL: "/api/v1/applications/update_work_commencement_date"
                },
                CREATE_DEVIATION: {
                    USECASE: "CREATE_DEVIATION",
                    URL: "/api/v1/deviations"
                },
                ARCHITECT_COMMENT: {
                    USECASE: "ARCHITECT_COMMENT",
                    URL: "/api/v1/applications/architect_console_comments"
                }
            }
        },
        "mS//": function(E, A, a) {
            E.exports = {
                UI_SERVER: "http://tsbpass.telangana.gov.in",
                API_SERVER: "https://backend.ts-bpass.com",
                PAYNIMO_MERCHANT_ID: "L516938",
                PAYNIMO_CONSUMER_ID: "c964634",
                PAYNIMO_SCHEME: "FIRST",
                RAZORPAY_KEY: "rzp_live_yYZpzzEnIc9hZK",
                OFFICER_LOGIN: "https://officers.ts-bpass.com/",
                SW_REDIRECT_URL: "https://sw.tsbpass.telangana.gov.in/?register",
                GP_SW_REDIRECT_URL: "/application/gp-sw-building/new"
            }
        },
        vUet: function(E, A, a) {
            "use strict";
            a.d(A, "a", (function() {
                return S
            }));
            a("wx14");
            var i = a("q1tI"),
                e = a.n(i),
                _ = e.a.createContext({});
            _.Consumer, _.Provider;

            function S(E, A) {
                var a = Object(i.useContext)(_);
                return E || a[A] || A
            }
        },
        wx14: function(E, A, a) {
            "use strict";

            function i() {
                return (i = Object.assign ? Object.assign.bind() : function(E) {
                    for (var A = 1; A < arguments.length; A++) {
                        var a = arguments[A];
                        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (E[i] = a[i])
                    }
                    return E
                }).apply(this, arguments)
            }
            a.d(A, "a", (function() {
                return i
            }))
        }
    }
]);